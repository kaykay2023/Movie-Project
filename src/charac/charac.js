import MD5 from 'crypto-js/md5'

// const API_URL=process.env.REACT_APP_BASE_URL;

// const getHash = (timestamp,secretKey,publicKey) => {
//    return MD5(timestamp+secretKey+publicKey).toString()
// }

// const fetchCharacter = async (value) => {
//   let characterUrl = `${API_URL}/v1/public/characters`

//   let timestamp = Date.now().toString()
//   let apiKey = process.env.REACR_APP_API_KEY
//   let privateKey = process.env.REACR_APP_PRIVATE_KEY
//   let hash = getHash(timestamp, privateKey, apiKey) 

//   let url = `${characterUrl}?timestamp=${timestamp}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${value}`

//  try{
//   let response = await fetch(url);
//    let data = await response.json();
//    console.log(data)
//   return data;
//  } 
//   catch (err){
//   console.error(err);
//   return;
//  }
// };


// export {fetchCharacter};