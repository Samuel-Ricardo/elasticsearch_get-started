export function getExecutionDuration<TReturn>(fun: Function):{result:TReturn, durantion:Date} {
    const start = new Date()
    const result:TReturn = fun()
    return{result, durantion: new Date(new Date().getTime() - start.getTime())} 
}