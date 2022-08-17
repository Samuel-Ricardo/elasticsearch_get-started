export async function getExecutionDuration<TReturn>(fun: Function):Promise<{result:TReturn, durantion: number}> {
    const start = new Date()
    const result:TReturn = await fun()
    return{result, durantion: new Date().getTime() - start.getTime()} 
}