import { StyleSheet } from "react-native";

export const userStyles = StyleSheet.create({
      container:{
        flex:1,
        padding:20,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  innerContainer: {
    flex: 1,
  },
  logo: {
    width: 250,
    height: 70,
    margin: 10,
    alignSelf: 'center',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    elevation: 4,
    backgroundColor: '#fff',
  },
  headerText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
  cardBody: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarContainer: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: 'grey',
    padding: 5,
    marginBottom: 5,
  },
  avatar: {
    backgroundColor: 'grey',
  },
  listItem: {
    alignItems:"center",
    textAlign: 'center',
    color: 'black',
  },
  syncCard: {
    marginTop: 5,
    padding: 10,
    elevation: 4,
    backgroundColor: '#fff',
    alignItems:"center"
  },
  syncText: {
    fontSize: 16,
    textAlign: 'center',
  },
  syncTextBold: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#47596e',
    margin: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',  // Ensure it takes the full height of the screen
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#000',
  },
})


export const userStylesDos = StyleSheet.create({
container_custodia: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flexGrow: 5,
    backgroundColor: "#fff",
  },
  mb_2: {
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    margin: 16,
    height: 540,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginTop: 0,
    marginBottom: 50,
  },
  card2: {
    backgroundColor: "#fff",
    borderRadius: 1,
    padding: 16,
    margin: 16,
    height: 300,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginTop: 50,
    marginBottom: 55,
  },
  card3: {
    backgroundColor: "#fff",
    borderRadius: 1,
    padding: 16,
    margin: 16,
    height: 520,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginTop: -10,
    marginBottom: 55,
  },
  card4: {
    backgroundColor: "#fff",
    borderRadius: 1,
    padding: 16,
    margin: 16,
    height: 150,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginTop: -10,
    marginBottom: 55,
  },
  card5: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    margin: 16,
    height: 140,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginTop: 0,
    marginBottom: 50,
  },
  row: {
    flexDirection: "row",
    marginBottom: 3,
    marginTop: 1,
  },
  field: {
    fontWeight: "bold",
    marginRight: 4,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
  input: {
    backgroundColor: "#fff",
    fontSize: 16,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
    marginBottom: 10,
  },
  textArea: {
    backgroundColor: "#fff",
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: "100%",
    minHeight: 100, // Altura mínima del TextArea
    marginBottom: 10,
  },
  inputMnifest:{
    backgroundColor: "#fff",
    color:"blue"
  }

  })