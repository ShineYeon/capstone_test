import styled from "styled-components";
import React, { useState, useEffect } from "react";
import StartLayout from "../components/auth/StartLayout";
import RoundBox from "../components/auth/RoundBox";
import PinkButton from "../components/auth/PinkButton";
import WhiteButton from "../components/auth/WhiteButton";
import StartText from "../components/auth/StartText";
import Input from "../components/auth/Input";
import SubmitButton from "../components/auth/SubmitButton";
import { useHistory } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import Header from "../components/feed/Header";
import AuthBox from "../components/auth/AuthBox";
import Footer from "../components/feed/Footer";
import BackButton from "../components/feed/BackButton";
import MeatOcrImg from "../image/meat.png";
import FruitsOcrImg from "../image/fruits.png";
import OcrContainer from "../components/auth/OcrContainer";
function OcrUpload() {
  const [fileImage, setFileImage] = useState("");
  const [fileImage2, setFileImage2] = useState("");

  const [meatOcrImg, setMeatOcrImg] = useState(false);
  const [fruitsOcrImg, setFruitsOcrImg] = useState(false);
  const [fishOcrImg, setFishOcrImg] = useState(false);
  const [vegeOcrImg, setVegeOcrImg] = useState(false);

  // 파일 저장
  const formData = new FormData();
  const saveMeatOcr = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
    for (const keyValue of formData) console.log(keyValue);
    setMeatOcrImg(true);
  };

  const saveFruitOcr = (e) => {
    setFileImage2(URL.createObjectURL(e.target.files[0]));
    //const img = e.target.files[0];
    for (const keyValue of formData) console.log(keyValue);
    setFruitsOcrImg(true);
  };
  const II = () => (
    <div>
      <img
        id="meat_img"
        alt="sample"
        src={fileImage}
        style={{ margin: "auto" }}
        width="163"
        height="197"
      />
    </div>
  );
  const IF = () => (
    <div>
      <img
        id="fruits_img"
        alt="sample"
        src={fileImage2}
        style={{ margin: "auto" }}
        width="163"
        height="197"
      />
    </div>
  );

  const Yet = () => (
    <div>
      <img id="meat_img" src={MeatOcrImg} />
    </div>
  );
  const YetF = () => (
    <div>
      <img id="fruits_img" src={FruitsOcrImg} />
    </div>
  );

  return (
    <StartLayout>
      <AuthLayout>
        <Header>
          <BackButton></BackButton>
          <div>알레르기 검사 OCR</div>
          <div> </div>
        </Header>
        <div
          className="TextSpace"
          style={{
            width: "90%",
            height: "100px",
            marginTop: "20px",
          }}
        >
          <p>
            반려동물의 알레르기 검사 결과를 정해진 규격에
            <br />
            따라 업로드 해주세요.
          </p>
        </div>
        <AuthBox>
          <OcrContainer>
            <div id="ocr_input1">
              <label className="input-file-button" htmlFor="input-file">
                {meatOcrImg ? <II /> : <Yet />}
              </label>
              <input
                id="input-file"
                name="imgUpload"
                type="file"
                accept="image/*"
                onChange={saveMeatOcr}
                style={{ display: "none" }}
              />
            </div>
            <div id="ocr_input2">
              <label className="input-file-button" htmlFor="input-file2">
                {fruitsOcrImg ? <IF /> : <YetF />}
              </label>
              <input
                id="input-file2"
                name="imgUpload"
                type="file"
                accept="image/*"
                onChange={saveFruitOcr}
                style={{ display: "none" }}
              />
            </div>
          </OcrContainer>
          <div
            className="WhiteSpace"
            style={{
              height: "25px",
            }}
          ></div>
          <OcrContainer>
            <div id="ocr_input2">
              <label className="input-file-button" htmlFor="input-file2">
                {fruitsOcrImg ? <IF /> : <YetF />}
              </label>
              <input
                id="input-file2"
                name="imgUpload"
                type="file"
                accept="image/*"
                onChange={saveFruitOcr}
                style={{ display: "none" }}
              />
            </div>
            <div id="ocr_input2">
              <label className="input-file-button" htmlFor="input-file2">
                {fruitsOcrImg ? <IF /> : <YetF />}
              </label>
              <input
                id="input-file2"
                name="imgUpload"
                type="file"
                accept="image/*"
                onChange={saveFruitOcr}
                style={{ display: "none" }}
              />
            </div>
          </OcrContainer>
          <SubmitButton>결과 확인하기</SubmitButton>
        </AuthBox>
      </AuthLayout>
    </StartLayout>
  );
}
export default OcrUpload;
