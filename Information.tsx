import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";

const Information = ({
  header,
  text,
  msg,
  isHidden,
}: {
  header?: string;
  msg?: string;
  text?: string;
  isHidden?: boolean;
}) => {
  return (
    <View style={{ marginTop: 12 }}>
      {isHidden && (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              height: 22,
              width: 4,
              backgroundColor: "#088dcd",
              marginBottom: 6,
            }}
          />
          <Text
            style={{
              fontSize: 18,
              marginLeft: 20,
              fontWeight: "600",
              color: "#000",
              marginBottom: 8,
            }}
          >
            {header}
          </Text>
        </View>
      )}

      {/* =====Line====*/}
      {isHidden && <View style={styles.line} />}

      {/* -=======infor add */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: 18,
          marginVertical: 6,
        }}
      >
        <View style={{ marginLeft: 12 }}>
          <Text style={{ color: "#000", fontSize: 18, fontWeight: "400" }}>
            {text}
          </Text>
          <Text
            style={{
              color: "#b7b7b8",
              fontSize: 16,
              fontWeight: "400",
              marginTop: 4,
            }}
          >
            {msg}
          </Text>
        </View>
      </View>
      <View style={styles.line} />
    </View>
  );
};

const Info = () => {
  const [name, setName] = useState<String>("");
  const [email, setEmail] = useState<String>("");
  return (
    <View>
      {/* ======demo props */}
      <View style={styles.container}>
        <Text
          style={{
            color: "#000",
            fontSize: 24,
            fontWeight: "500",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          Demo Props
        </Text>
        <Information
          isHidden={true}
          header={"Thông Tin"}
          text={"Mô tả"}
          msg={"Trường rất cổ kính có nhiều sinh viên giỏi "}
        />
        <Information
          text={"Địa Chỉ"}
          msg={"51 Lý Phục Man ,Phường Bình Thuận Quận 7"}
        />
        <Information text={"Số Điện Thoại"} msg={"0977233396"} />
      </View>

      {/* =====demo state===== */}
      <Text
        style={{
          color: "#000",
          fontSize: 24,
          fontWeight: "500",
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        Demo State
      </Text>

      <TextInput
        placeholder={"Full Name"}
        value={name}
        onChangeText={(name) => setName(name)}
        style={styles.input}
      />

      <TextInput
        placeholder={"Email"}
        value={email}
        onChangeText={(email) => setEmail(email)}
        style={styles.input}
      />
      {/* ====Hien Thi Thong Tin Thay Doi */}
      <View style={{ marginLeft: 20 }}>
        <Text
          style={{
            color: "#000",
            fontSize: 16,
            fontWeight: "400",
            marginVertical: 8,
          }}
        >
          Full Name : {name}
        </Text>
        <Text
          style={{
            color: "#000",
            fontSize: 16,
            fontWeight: "400",
            marginVertical: 8,
          }}
        >
          Email: {email}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 1,
    width: 330,
    marginVertical: 2,
    backgroundColor: "#E1E8EC",
    marginHorizontal: 16,
  },
  container: {
    marginHorizontal: 10,
    marginTop: 30,
    padding: 20,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "#E1E8EC",
    borderRadius: 6,
    flexDirection: "column",
  },
  input: {
    borderWidth: 0.5,
    borderColor: "#d6d5d5",
    height: 40,
    width: 350,
    marginHorizontal: 20,
    borderRadius: 4,
    paddingLeft: 8,
    marginVertical: 10,
  },
});
export default Info;
