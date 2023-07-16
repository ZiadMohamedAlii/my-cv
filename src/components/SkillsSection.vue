<template>
  <body>
    <div class="container">
      <div class="row vh-100 d-flex align-items-center justify-content-center">
        <div class="wrapper">
          <div class="shape-1"></div>
          <div class="shape-2"></div>
          <div class="card">
            <h2>{{ description }}</h2>
            <div class="skills">
              <div class="details">
                <span>HTML</span>
                <span>90%</span>
              </div>
              <div class="bar" style="--bar-color: #f06529">
                <div id="html-bar"></div>
              </div>
            </div>
            <div class="skills">
              <div class="details">
                <span>CSS</span>
                <span>80%</span>
              </div>
              <div class="bar" style="--bar-color: #264de4">
                <div id="css-bar"></div>
              </div>
            </div>
            <div class="skills">
              <div class="details">
                <span>Javascript</span>
                <span>72%</span>
              </div>
              <div class="bar" style="--bar-color: #f0db4f">
                <div id="js-bar"></div>
              </div>
            </div>
            <div class="skills">
              <div class="details">
                <span>VueJs</span>
                <span>75%</span>
              </div>
              <div class="bar" style="--bar-color: #41b883">
                <div id="VueJs-bar"></div>
              </div>
            </div>
            <div class="skills">
              <div class="details">
                <span>BootStrap</span>
                <span>85%</span>
              </div>
              <div class="bar" style="--bar-color: #563d7c">
                <div id="BootStrap-bar"></div>
              </div>
            </div>
            <div class="skills">
              <div class="details">
                <span>Tailwind</span>
                <span>70%</span>
              </div>
              <div class="bar" style="--bar-color: #a5f3fc">
                <div id="Tailwind-bar"></div>
              </div>
            </div>
            <div class="skills">
              <div class="details">
                <span>GitHub</span>
                <span>75%</span>
              </div>
              <div class="bar" style="--bar-color: #171515">
                <div id="GitHub-bar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "SkillsSection",
  data() {
    return {
      description: "My Skills",
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Rancho&family=Water+Brush&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  background-color: #909090;
}

.wrapper {
  width: 40%;
  min-width: 570px;
  position: absolute;
}
.card {
  font-family: "Poppins", sans-serif;
  color: black;
  font-weight: 500;
  width: 100%;
  padding: 30px 30px 50px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
}

h2 {
  margin-bottom: 50px;
  letter-spacing: 2px;
  text-align: center;
  font-size: 33px;
  font-weight: bold;
}

.details {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.bar {
  position: relative;
  border: 2px solid var(--bar-color);
  border-radius: 20px;
}
.bar div {
  position: relative;
  width: 0;
  height: 9px;
  border-radius: 10px;
}

#html-bar {
  animation: html-fill 2s forwards;
}
@keyframes html-fill {
  100% {
    width: 90%;
    background-color: var(--bar-color);
  }
}
#css-bar {
  animation: css-fill 2s forwards;
}
@keyframes css-fill {
  100% {
    width: 80%;
    background-color: var(--bar-color);
  }
}
#js-bar {
  animation: js-fill 2s forwards;
}
@keyframes js-fill {
  100% {
    width: 72%;
    background-color: var(--bar-color);
  }
}
#VueJs-bar {
  animation: VueJs-fill 2s forwards;
}
@keyframes VueJs-fill {
  100% {
    width: 75%;
    background-color: var(--bar-color);
  }
}
#BootStrap-bar {
  animation: BootStrap-fill 2s forwards;
}
@keyframes BootStrap-fill {
  100% {
    width: 85%;
    background-color: var(--bar-color);
  }
}
#Tailwind-bar {
  animation: Tailwind-fill 2s forwards;
}
@keyframes Tailwind-fill {
  100% {
    width: 70%;
    background-color: var(--bar-color);
  }
}
#GitHub-bar {
  animation: GitHub-fill 2s forwards;
}
@keyframes GitHub-fill {
  100% {
    width: 75%;
    background-color: var(--bar-color);
  }
}
</style>
