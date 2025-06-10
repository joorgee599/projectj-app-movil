
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import HomeComponent from '../components/home/HomeComponent'
import { homeStyles } from '../styles/Home'

const Home = () => {
  return (
    <View style={homeStyles.container}>
      <HomeComponent />
      </View>
  )
}

export default Home