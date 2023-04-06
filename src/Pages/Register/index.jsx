import React, { useEffect, useState } from "react";
import { Container, Left, Right, Title, Wrap } from "./style";
import loginImg from "../../Assets/Img/sign-in.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { mainUrl } from "../../MainUrl";
import Loading from "../../Components/Loading";

const Register = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [selectedGroup, setSelectedGroup] = useState([]);
  const [group, setGroup] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(mainUrl + "auth/groups-all/")
      .then((res) => res.json())
      .then((res) => {
        setSelectedGroup(res);
        setGroup(res[0].id);
      });

    setLoading(false);
  }, []);

  const login = async () => {
    try {
      const res = await axios.post(mainUrl + "auth/register/", {
        email: loginEmail,
        password: loginPassword,
        first_name: name,
        last_name: surname,
        phone_number: phoneNumber,
        group: group,
      });
      if (res.status === 201 || res.status === 200) {
        const response = await axios.post(mainUrl + "auth/login/", {
          email: loginEmail,
          password: loginPassword,
        });

        if (response.status === 200) {
          localStorage.setItem("access", response?.data?.access);
          localStorage.setItem("refresh", response?.data?.refresh);
          localStorage.setItem("loged", true);
          navigate("/");
        }
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Left>
        <img src={loginImg} alt="" />
      </Left>
      <Right>
        <Wrap>
          <Title>Зарегистрироваться</Title>
          <Right.Message>{message && message}</Right.Message>
          <Right.Wrap>
            <Right.Title>Электронная почта</Right.Title>
            <Right.Input
              type="text"
              value={loginEmail}
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
              placeholder="Электронная почта..."
            />
          </Right.Wrap>
          <Right.Wrap>
            <Right.Title>Ваше имя</Right.Title>
            <Right.Input
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              placeholder="имя ..."
            />
          </Right.Wrap>
          <Right.Wrap>
            <Right.Title>Ваша фамилия</Right.Title>
            <Right.Input
              type="text"
              value={surname}
              onChange={(event) => {
                setSurname(event.target.value);
              }}
              placeholder="фамилия..."
            />
          </Right.Wrap>
          <Right.Wrap>
            <Right.Title>Номер телефона</Right.Title>
            <Right.Input
              type="text"
              value={phoneNumber}
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }}
              placeholder="телефон..."
            />
          </Right.Wrap>
          <Right.Wrap>
            <label htmlFor="selectOption">Ваша группа: </label>
            <select
              id="selectOption"
              value={group}
              onChange={(e) => setGroup(e.target.value)}
            >
              {selectedGroup?.map((e) => {
                return (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                );
              })}
            </select>
          </Right.Wrap>
          <Right.Wrap>
            <Right.Title>Пароль</Right.Title>
            <Right.Input
              type="password"
              value={loginPassword}
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
              placeholder="Пароль..."
            />
          </Right.Wrap>
          <Right.Btn onClick={login}>Входить</Right.Btn>
        </Wrap>
      </Right>
    </Container>
  );
};

export default Register;
