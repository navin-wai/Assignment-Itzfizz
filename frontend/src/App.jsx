import car from "./assets/car.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import sideview from "./assets/sideview.png";
import wheel from "./assets/wheel.png";
import "./App.css";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const scrollRef = useRef(null);
  const timeline = gsap.timeline();

  useGSAP(() => {
    const per = gsap.utils.toArray(scrollRef.current?.children || []);
    timeline.to(".itzfizzz", {
      opacity: 1,
    });
    timeline.to(".itzfizzz", {
      repeat: -1,
      y: 4,
      yoyo: 1,
      ease: "circ.inOut",
    });
    gsap.to(".title", {
      opacity: 1,
      x: 55,
    });

    gsap.to(".moving-car", {
      scrollTrigger: {
        trigger: ".moving-car",
        scrub: 1.2,
      },
      x: "25vw",
    });
    gsap.to(".wheel", {
      scrollTrigger: {
        trigger: ".wheel",
        scrub: 1,
      },
      rotation: 1000,
    });

    gsap.to(".text-lleft", {
      scrollTrigger: {
        trigger: ".text-lleft",
        scrub: 1,
        start: "bottom bottom",
        end: "top 10%",
      },
      x: "-4vw",
    });

    gsap.to(".text-rright", {
      scrollTrigger: {
        trigger: ".text-rright",
        scrub: 1,
        start: "bottom bottom",
        end: "top 20%",
      },
      x: "8vw",
    });

    gsap.to(".car-top-view", {
      x: -100,
      duration: 1,
    });

    gsap.to(".car-top-view2", {
      scrollTrigger: {
        trigger: ".car-top-view2",
        scrub: 1,
        start: "bottom bottom",
        end: "top top",
      },
      rotate: 93,
    });

    per.forEach((item) => {
      gsap.to(item, {
        x: 20,
        opacity: 1,
        color: "#ed7f00",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "top 70%",
          scrub: 1,
        },
      });
    });
  }, []);
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="itzfizzz opacity-0">WELCOME ITZFIZZ</h1>
          <p className="title opacity-0">
            We are dedicated to helping all businesses, big or small, to stand
            out in the crowded online marketplace
          </p>
          <img className="car-top-view rotate-180" src={car} alt="car image" />
        </div>
      </section>
      <main>
        <div className="container">
          <div className="title">
            <h1 className="text text-lleft">metrics </h1>
            <h1 className="ampersand">&</h1>
            <h1 className="text text-rright">statistics </h1>
          </div>
          <div className="moving-car">
            <img src={sideview} alt="car" className="side-view" />
            <img src={wheel} alt="wheel" className="wheel rear" />
            <img src={wheel} alt="wheel" className="wheel front" />
          </div>
          <img className="car-top-view2" src={car} alt="car image" />
          <div className="specs" ref={scrollRef}>
            <h2 className="percentage">58%</h2>
            <p className="opacity-0">Increase in pick up point use</p>
            <h2 className="percentage">27%</h2>
            <p className="opacity-0">Increase in pick up point use</p>
            <h2 className="percentage">23%</h2>
            <p className="opacity-0">Decreased in customer phone calls</p>
            <h2 className="percentage">40%</h2>
            <p className="opacity-0">Decreased in customer phone calls</p>
          </div>
        </div>
      </main>
      <footer className="h-40 flex justify-center items-center">
        <div className="text-4xl">
          My Portfolio :-
          <a href="https://navin-1aj9.onrender.com/" target="_blank">
            {" "}
            Click me!
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
