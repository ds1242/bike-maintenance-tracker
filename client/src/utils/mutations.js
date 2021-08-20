import gql from 'graphql-tag';


export const CREATE_USER = gql`
    mutation addUser($name: String!, $username: String!, $email: String!, $password: String!) {
        addUser(name: $name, username: $username, email: $email, password: $password) {
            token
            user {
                _id
                name
                username
                email            
            }
        }
    }
`;

export const CREATE_BIKE = gql`
mutation addBike(
    $make: String!,
    $model: String!,
    $year: String,
    $bikeType: String,
    $forkMake: String,
    $forkModel: String,
    $forkHours: String,
    $cassetteMake: String, 
    $cassetteModel: String, 
    $cassetteMiles: String, 
    $chainringMake: String, 
    $chainringModel: String, 
    $chainringMiles: String, 
    $chainName:String, 
    $chainMiles: String, 
    $shockMake: String, 
    $shockModel: String, 
    $shockHours: String, 
    $frontDeraileurMake: String, 
    $frontDeraileurModel: String, 
    $frontDeraileurMiles: String, 
    $rearDeraileurMake: String, 
    $rearDeraileurModel: String, 
    $rearDeraileurMiles: String, 
    $bikePhoto: String, 
    $user_id: String
  ) {
    addBike (
          make: $make,
      model: $model,
      year: $year,
      bikeType: $bikeType,
      forkMake: $forkMake,
      forkModel: $forkModel,
      forkHours: $forkHours,
      cassetteMake: $cassetteMake,
      cassetteModel: $cassetteModel,
      cassetteMiles: $cassetteMiles,
      chainringMake: $chainringMake,
      chainringModel: $chainringModel,
      chainringMiles: $chainringMiles,
      chainName: $chainName,
      chainMiles:$chainMiles
      shockMake: $shockMake,
      shockModel: $shockModel,
      shockHours: $shockHours,
      frontDeraileurMake: $frontDeraileurMake,
      frontDeraileurModel: $frontDeraileurModel,
      frontDeraileurMiles: $frontDeraileurMiles,
      rearDeraileurMake: $rearDeraileurMake,
      rearDeraileurModel: $rearDeraileurModel,
      rearDeraileurMiles: $rearDeraileurMiles,
      bikePhoto: $bikePhoto
      user_id: $user_id
    ) {
      _id
      make
      model
      year
      bikeType
      forkMake
      forkModel
      forkHours
      cassetteMake
      cassetteModel
      cassetteMiles
      chainringMake
      chainringModel
      chainringMiles
      chainName
      chainMiles
      shockMake
      shockModel
      shockHours
      frontDeraileurMake
      frontDeraileurModel
      frontDeraileurModel
      frontDeraileurMiles
      rearDeraileurMake
      rearDeraileurModel
      rearDeraileurMiles
      bikePhoto
    }
}`;