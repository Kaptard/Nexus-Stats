'use strict'

const chalk = require('chalk')

/**
 * Logger Middleware
 */
class Logger {
    log(req, res, next) {
        this.req = req
        this.res = res

        // Prepare output
        this.setPrefix(req)
        this.logErr(next)
        this.logRes(res)
        this.addTimer(res)

        // Actual Console Output
        console.log(this.prefix + "< " + req.user.uid + " " + req.method + " " + req.url)
        next()
    }


    /**
     * Identify if request sent by Socket.io or Express
     */
     setPrefix(req) {
        if (req.channel === "Sockets") {
            this.prefix = chalk.grey("Socket.io | ")
        } else {
            this.prefix = chalk.grey("Express   | ")
        }
     }


     /**
      * Log any errors passed to next()
      */
    logErr(next) {
        let _next = next
        next = (err) => {
            _next(err)
            if(err) {
                console.log(this.prefix + chalk.red("> ") + err)
            }
        }
    }


    /**
     * Log Output of res.send
     */
    logRes(res) {
        let io = "> "
        let _send = res.send
        let prefix = this.prefix

        res.send = function(body) {
           _send.call(this, body)

           // Output is error?
           if(res.statusCode.toString().includes('2') || res.statusCode.toString().includes('2')){
               io = chalk.green(io)
           } else {
               io = chalk.red(io)
           }

           console.log(prefix + io + res.statusCode + ": " + body)
        }
    }


    /**
     * Add Timer to original res.send
     */
     addTimer(res) {
         let timestart = process.hrtime()
         let _send = res.send
         let prefix = this.prefix

         res.send = function(body) {
            _send.call(this, body)
            console.log(prefix + chalk.grey("> " + (process.hrtime()[1] - timestart[1]) / 1000000 + "ms"))
            console.log(" ")
         }
     }
}

module.exports = new Logger()
