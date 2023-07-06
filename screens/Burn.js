const takePhotoFromCamera =() {
    ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        console.log(image);
      });
      return
      {<TouchableOpacity onPress={() => navigation.navigate(LearningState ? "Burnlearn" : "Home")} style={{ height: 130, width: "45%", backgroundColor: "#fff", borderWidth: .5, justifyContent: "center", alignItems: "center" }}>
      <Image source={require("../images/الحروق.png")} style={{ height: 80, width: 80, borderRadius: 50 }}></Image>
      <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold", marginRight: 20 }}>الحروق   </Text>
    </TouchableOpacity>}
}
