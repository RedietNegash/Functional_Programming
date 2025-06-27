
const simpleProfile = (longRunningTask) => {
    return () => {
      console.log(`Started running at: ${new Date().getTime()}`)
      longRunningTask()
      console.log(`Finished running at: ${new Date().getTime()}`)
    }
  }
  
  const calculateBigSum = () => {
    let total = 0
    for (let counter = 0; counter < 100000000; counter += 1) {
      total += counter
    }
    return total
  }
  
  const runCalculationWithProfile = simpleProfile(calculateBigSum)
  
  runCalculationWithProfile()