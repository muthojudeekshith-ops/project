* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Poppins, sans-serif;
}

body {
  overflow: hidden;
}

/* COMMON */
.screen {
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 1s ease;
}

.screen.active {
  opacity: 1;
  pointer-events: auto;
}

/* INTERFACE 1 */
#interface1 {
  background: #fff;
  flex-direction: column;
}

.bubble-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.bubble {
  position: absolute;
  width: 100px;
  height: 100px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  animation: float 4s infinite ease-in-out;
}

.bubble:nth-child(1){top:30%;left:40%;}
.bubble:nth-child(2){top:40%;left:50%;}
.bubble:nth-child(3){top:35%;left:60%;}
.bubble:nth-child(4){top:45%;left:45%;}
.bubble:nth-child(5){top:50%;left:55%;}

@keyframes float {
  50% { transform: translateY(-20px); }
}

#nameText {
  font-size: 46px;
  color: purple;
  letter-spacing: 4px;
  cursor: pointer;
  z-index: 5;
  transition: transform 1.8s ease, opacity 1.8s ease;
}

/* INTERFACE 2 */
.image-bg {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-4x5 {
  position: relative;
  width: 80vw;
  max-width: 420px;
  aspect-ratio: 4 / 5;
  background: white;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.image-4x5 img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* CLICK ZONES */
.zone {
  position: absolute;
  cursor: pointer;
}

/* Clockwise zones (adjust if needed) */
.z1 { top: 5.2%; left: 16.5%; width:  22%; height: 18%; }
.z2 { top: 20%; right: 5.5%; width: 23%; height: 18%; }
.z3 { top: 46%; right:5%; width: 23%; height: 18%; }
.z4 { 
  top: 4.8%; 
  left: 46%;
  width: 22%;
  height: 18%;
}
.z5 { top: 32%; left: 5%; width: 22%; height: 18%; }

/* INFO INTERFACES */
.info {
  background: #fff;
  font-size: 22px;
  padding: 20px;
}.
.info {
  background: #fff;
  padding: 30px 22px;
  overflow-y: auto;
  text-align: left;
}

.info h2 {
  font-size: 22px;
  margin-bottom: 15px;
}

.info p {
  font-size: 15px;
  line-height: 1.6;
  white-space: pre-line;
}
