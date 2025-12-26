<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WindPower Solutions - Loading</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
    <style>
      /* Loading Screen Styles */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        overflow: hidden;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, sans-serif;
      }

      #loader-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: var(--bg-dark);
        /* background: linear-gradient(
          135deg,
          #0a4d3c 0%,
          #1a7a5e 50%,
          #2d9f7a 100%
        ); */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }

      /* Fade Out Animation for entire wrapper */
      .loader-wrapper.fade-out {
        animation: fadeOutUp 1.5s ease-in-out forwards;
      }

      @keyframes fadeOutUp {
        0% {
          opacity: 1;
          transform: scale(1);
        }
        100% {
          opacity: 0;
          transform: scale(1.1);
        }
      }

      .loader-content {
        text-align: center !important;
        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      }

      /* Windmill Animation */
      .windmill {
        position: relative;
        width: 200px;
        height: 250px;
        margin: 0 auto 2rem;
      }

      .windmill-tower {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 30px;
        height: 150px;
        background: linear-gradient(180deg, #34a873 0%, #2d8f63 100%);
        border-radius: 5px 5px 0 0;
        box-shadow: 0 5px 20px rgba(52, 168, 115, 0.3);
      }

      .windmill-blades {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 180px;
        height: 180px;
        animation: rotate 3s linear infinite;
      }

      @keyframes rotate {
        from {
          transform: translateX(-50%) rotate(0deg);
        }
        to {
          transform: translateX(-50%) rotate(360deg);
        }
      }

      .blade {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 80px;
        height: 20px;
        background: linear-gradient(90deg, #4cceac 0%, #34a873 100%);
        border-radius: 50px 0 0 50px;
        transform-origin: right center;
        box-shadow: 0 3px 15px rgba(76, 206, 172, 0.4);
      }

      .blade-1 {
        transform: translate(-100%, -50%) rotate(0deg);
      }

      .blade-2 {
        transform: translate(-100%, -50%) rotate(120deg);
      }

      .blade-3 {
        transform: translate(-100%, -50%) rotate(240deg);
      }

      .windmill-center {
        position: absolute;
        top: 90px;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 25px;
        height: 25px;
        background: #fff;
        border-radius: 50%;
        box-shadow:
          0 0 20px rgba(76, 206, 172, 0.6),
          0 0 40px rgba(76, 206, 172, 0.4);
        z-index: 2;
        animation: pulse 2s ease-in-out infinite;
      }

      @keyframes pulse {
        0%,
        100% {
          transform: translate(-50%, -50%) scale(1);
        }
        50% {
          transform: translate(-50%, -50%) scale(1.2);
        }
      }

      /* Loading Text */
      .loading-text {
        color: #fff;
        margin-bottom: 2rem;
        text-align: center !important;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .loading-text h2 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        text-align: center !important;
        width: 100%;
        display: block;
      }

      .loading-dots {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        gap: 0.5rem;
      }

      .dot {
        width: 12px;
        height: 12px;
        background: #4cceac;
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(76, 206, 172, 0.6);
      }

      /* Progress Bar */
      .progress-container {
        width: 300px;
        height: 8px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50px;
        margin: auto 1rem;
        overflow: hidden;
        box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2);
      }

      .progress-bar {
        height: 100%;
        width: 0%;
        background: linear-gradient(
          90deg,
          #4cceac 0%,
          #34a873 50%,
          #2d9f7a 100%
        );
        border-radius: 50px;
        transition: width 0.3s ease;
        box-shadow:
          0 0 20px rgba(76, 206, 172, 0.6),
          0 0 40px rgba(76, 206, 172, 0.4);
        animation:
          glow 2s ease-in-out infinite,
          progressFill 3s ease-in-out forwards;
      }

      @keyframes progressFill {
        from {
          width: 0%;
        }
        to {
          width: 100%;
        }
      }

      @keyframes glow {
        0%,
        100% {
          box-shadow:
            0 0 20px rgba(76, 206, 172, 0.6),
            0 0 40px rgba(76, 206, 172, 0.4);
        }
        50% {
          box-shadow:
            0 0 30px rgba(76, 206, 172, 0.8),
            0 0 60px rgba(76, 206, 172, 0.6);
        }
      }

      .progress-percentage {
        color: #4cceac;
        font-size: 1.2rem;
        font-weight: 600;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        text-align: center !important;
        width: 100%;
      }

      /* Eco Icons */
      .eco-icons {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-top: 2rem;
      }

      .eco-icon {
        font-size: 2rem;
        animation: float 3s ease-in-out infinite;
        opacity: 0.8;
      }

      .eco-icon:nth-child(1) {
        animation-delay: 0s;
      }

      .eco-icon:nth-child(2) {
        animation-delay: 0.5s;
      }

      .eco-icon:nth-child(3) {
        animation-delay: 1s;
      }

      @keyframes float {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }

      /* Background Wind Animation */
      .bg-animation {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 1;
      }

      .wind-line {
        position: absolute;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(
          90deg,
          transparent 0%,
          rgba(76, 206, 172, 0.3) 50%,
          transparent 100%
        );
        animation: windMove 4s linear infinite;
      }

      @keyframes windMove {
        0% {
          left: -100%;
        }
        100% {
          left: 100%;
        }
      }

      /* Energy Particles */
      .energy-particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(76, 206, 172, 0.6);
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(76, 206, 172, 0.8);
        animation: floatParticle 6s linear infinite;
      }

      @keyframes floatParticle {
        0% {
          transform: translateY(100vh) scale(0);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateY(-100vh) scale(1);
          opacity: 0;
        }
      }

      /* Responsive Design */
      @media (max-width: 768px) {
        .windmill {
          width: 150px;
          height: 200px;
        }

        .windmill-tower {
          width: 25px;
          height: 120px;
        }

        .windmill-blades {
          width: 140px;
          height: 140px;
        }

        .blade {
          width: 60px;
          height: 15px;
        }

        .windmill-center {
          top: 70px;
          width: 20px;
          height: 20px;
        }

        .loading-text h2 {
          font-size: 1.2rem;
        }

        .progress-container {
          width: 250px;
        }

        .eco-icons {
          gap: 1rem;
        }

        .eco-icon {
          font-size: 1.5rem;
        }
      }
    </style>
  </head>
  <body>
    <!-- Loading Screen -->
    <div id="loader-wrapper" class="loader-wrapper">
      <div class="loader-content">
        <!-- Animated Windmill -->
        <div class="windmill animate__animated animate__zoomIn">
          <div class="windmill-tower"></div>
          <div class="windmill-blades">
            <div class="blade blade-1"></div>
            <div class="blade blade-2"></div>
            <div class="blade blade-3"></div>
          </div>
          <div class="windmill-center"></div>
        </div>

        <!-- Loading Text -->
        <div class="loading-text animate__animated animate__fadeIn">
          <h2 class="animate__animated animate__flash animate__infinite">
            Harnessing Wind Energy
          </h2>
          <!-- <div class="loading-dots">
            <span
              class="dot animate__animated animate__bounce animate__infinite"
              style="animation-delay: 0s;"
            ></span>
            <span
              class="dot animate__animated animate__bounce animate__infinite"
              style="animation-delay: 0.2s;"
            ></span>
            <span
              class="dot animate__animated animate__bounce animate__infinite"
              style="animation-delay: 0.4s;"
            ></span>
          </div> -->
        </div>

        <!-- Progress Bar -->
        <div
          class="progress-container animate__animated animate__fadeIn"
          style="animation-delay: 0.3s;"
        >
          <div class="progress-bar" id="progressBar"></div>
        </div>
        <div
          class="progress-percentage animate__animated animate__fadeIn"
          id="progressText"
          style="animation-delay: 0.5s;"
        >
          0%
        </div>

        <!-- Eco-friendly Icons -->
        <div class="eco-icons">
          <div
            class="eco-icon animate__animated animate__bounceIn"
            style="animation-delay: 0.5s;"
          >
            🌱
          </div>
          <div
            class="eco-icon animate__animated animate__bounceIn"
            style="animation-delay: 0.7s;"
          >
            ♻️
          </div>
          <div
            class="eco-icon animate__animated animate__bounceIn"
            style="animation-delay: 0.9s;"
          >
            🌍
          </div>
        </div>
      </div>

      <!-- Animated Background -->
      <div class="bg-animation">
        <div class="wind-line" style="top: 20%; animation-delay: 0s;"></div>
        <div class="wind-line" style="top: 40%; animation-delay: 0.5s;"></div>
        <div class="wind-line" style="top: 60%; animation-delay: 1s;"></div>
        <div class="wind-line" style="top: 80%; animation-delay: 1.5s;"></div>

        <!-- Energy Particles -->
        <div
          class="energy-particle"
          style="left: 10%; animation-delay: 0s;"
        ></div>
        <div
          class="energy-particle"
          style="left: 25%; animation-delay: 1s;"
        ></div>
        <div
          class="energy-particle"
          style="left: 40%; animation-delay: 2s;"
        ></div>
        <div
          class="energy-particle"
          style="left: 55%; animation-delay: 0.5s;"
        ></div>
        <div
          class="energy-particle"
          style="left: 70%; animation-delay: 1.5s;"
        ></div>
        <div
          class="energy-particle"
          style="left: 85%; animation-delay: 2.5s;"
        ></div>
      </div>
    </div>

    <script>
      // Minimal JavaScript - Only for progress updates
      document.addEventListener("DOMContentLoaded", function () {
        const loaderWrapper = document.getElementById("loader-wrapper");
        const progressText = document.getElementById("progressText");

        let progress = 0;
        const loadingDuration = 3000;
        const intervalTime = 30;
        const increment = (100 * intervalTime) / loadingDuration;

        // Update progress percentage text
        const loadingInterval = setInterval(() => {
          progress += increment;

          if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);

            setTimeout(() => {
              // Add animate.css classes for exit
              loaderWrapper.classList.add(
                "animate__animated",
                "animate__fadeOut"
              );

              setTimeout(() => {
                loaderWrapper.style.display = "none";
                document.body.style.overflow = "auto";
              }, 1000);
            }, 500);
          }

          progressText.textContent = Math.floor(progress) + "%";
        }, intervalTime);

        // Skip loader on click
        loaderWrapper.addEventListener("click", function () {
          if (progress < 100) {
            progress = 100;
            progressText.textContent = "100%";
            clearInterval(loadingInterval);

            setTimeout(() => {
              loaderWrapper.classList.add(
                "animate__animated",
                "animate__fadeOut"
              );

              setTimeout(() => {
                loaderWrapper.style.display = "none";
                document.body.style.overflow = "auto";
              }, 1000);
            }, 500);
          }
        });
      });
    </script>
  </body>
</html>
