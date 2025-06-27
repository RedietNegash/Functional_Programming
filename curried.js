



const generateGreeting = (occasion) => {
    return (relationship) => {
      return (name) => {
        console.log(`My dear ${relationship} ${name}. Hope you have a great ${occasion}`)
      }
    }
  }
  
  const greeter = generateGreeting('birthday')
  

  const greeterCousin = greeter('cousin')
  const cousins = ['Jamie', 'Ben', 'Teddy']
  
  cousins.forEach((cousin) => {
    greeterCousin(cousin)
  })
  
  

  const greeterFriend = greeter('friend')
  const friends = ['Ned', 'John', 'Rob']
  friends.forEach((friend) => {
    greeterFriend(friend)
  })
