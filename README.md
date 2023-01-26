# simple-calculator

:root {
--text-font-family: "Roboto", sans-serif;
--color-title: #8f94fb;
--color-background: #4e54c8;
}

.body {
height: 100vh;
padding: 10px;
font-family: var(--text-font-family);
background-color: var(--color-background);
margin: 0;
}

.main {
width: 100%;
position: absolute;
top: 20vh;
display: flex;
flex-direction: column;
align-items: center;
}

.title {
color: var(--color-title);
text-align: center;
text-transform: uppercase;
font-weight: 800;
font-size: 40px;
animation: rubberBand;
animation-duration: 2s;
}

.form {
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 40px;
color: var(--color-background);
z-index: 100;
}

.wrap {
background-color: white;
padding: 15px;
border-radius: 20px;
width: 80%;
}

.wrap-select {
display: flex;
align-items: center;
background-color: white;
padding: 15px;
border-radius: 20px;
width: 80%;
}

.form-label {
font-weight: 600;
font-size: 18px;
margin-right: 15px;
}

.select {
border-radius: 20px;
font-size: 16px;
padding: 8px;
}

.input {
padding: 4px;
border-radius: 20px;
}

.btn {
padding: 15px;
border-radius: 30px;
width: 30%;
background-color: white;
font-weight: 600;
font-size: 18px;
border: none;
z-index: 100;
color: var(--color-background);
}
.btn:hover {
animation: heartBeat;
animation-duration: 2s;
}

.result {
display: flex;
justify-content: flex-start;
background-color: white;
color: var(--color-background);
font-weight: 600;
font-size: 18px;
padding: 15px;
border-radius: 20px;
width: 80%;
}

/_ ANIMATION _/

/\* .area {
background: var(--color-background);
background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
width: 100%;
height: 100vh;
z-index: -1000;
}

.circles {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
}

.circles li {
position: absolute;
display: block;
list-style: none;
width: 20px;
height: 20px;
background: rgba(255, 255, 255, 0.2);
animation: animate 25s linear infinite;
bottom: -150px;
}

.circles li:nth-child(1) {
left: 25%;
width: 80px;
height: 80px;
animation-delay: 0s;
}

.circles li:nth-child(2) {
left: 10%;
width: 20px;
height: 20px;
animation-delay: 2s;
animation-duration: 12s;
}

.circles li:nth-child(3) {
left: 70%;
width: 20px;
height: 20px;
animation-delay: 4s;
}

.circles li:nth-child(4) {
left: 40%;
width: 60px;
height: 60px;
animation-delay: 0s;
animation-duration: 18s;
}

.circles li:nth-child(5) {
left: 65%;
width: 20px;
height: 20px;
animation-delay: 0s;
}

.circles li:nth-child(6) {
left: 75%;
width: 110px;
height: 110px;
animation-delay: 3s;
}

.circles li:nth-child(7) {
left: 35%;
width: 150px;
height: 150px;
animation-delay: 7s;
}

.circles li:nth-child(8) {
left: 50%;
width: 25px;
height: 25px;
animation-delay: 15s;
animation-duration: 45s;
}

.circles li:nth-child(9) {
left: 20%;
width: 15px;
height: 15px;
animation-delay: 2s;
animation-duration: 35s;
}

.circles li:nth-child(10) {
left: 85%;
width: 150px;
height: 150px;
animation-delay: 0s;
animation-duration: 11s;
}

@keyframes animate {
0% {
transform: translateY(0) rotate(0deg);
opacity: 1;
border-radius: 0;
}

100% {
transform: translateY(-1000px) rotate(720deg);
opacity: 0;
border-radius: 50%;
}
} \*/
