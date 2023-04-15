//axios.post(url, data, config)



axios.post("https://jsonplaceholder.typicode.com/users",{
    name: "Lorem Ipsum",
    username: "Lorem",
    email: "lorem@gmail.com",
    address: {
      street: "hello",
      suite: "Apt. 555",
      city: "Baku",
      zipcode: "0000-0001",
      geo: {
        lat: "-37.3234",
        lng: "81.4532"
      }
    },
    phone: "1-000-000-8031 x56442",
    website: "lorem.org",
    company: {
      name: "Blbla",
      catchPhrase: "hello world",
      bs: "hello"
    }   
}).then(response=>{
    console.log(response.data);
}).catch(function(error){
    console.log(error);
});





async function Post(){
    const url = 'https://jsonplaceholder.typicode.com/users';
const data = { 
name: "Lorem Ipsum",
username: "Lorem",
email: "lorem@gmail.com",
address: {
  street: "hello",
  suite: "Apt. 555",
  city: "Baku",
  zipcode: "0000-0001",
  geo: {
    lat: "-37.3234",
    lng: "81.4532"
  }
},
phone: "1-000-000-8031 x56442",
website: "lorem.org",
company: {
  name: "Blbla",
  catchPhrase: "hello world",
  bs: "hello"
}    };
    const response = await axios.post(url, data);
    console.log(response.data);
}

Post();
