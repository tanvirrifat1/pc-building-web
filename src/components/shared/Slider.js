import React from "react";

const Slider = () => {
  return (
    <section className="py-6 ">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/CwQLD87/DSCF7140-min-1.jpg"
            className="w-full h-[700px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/YkLKFLZ/images.jpg"
            className="w-full h-[700px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/bKSbsZn/images-1.jpg"
            className="w-full h-[700px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/mG7RGC2/Best-Tempered-Glass-PC-Case-pchouseandcase.jpg"
            className="w-full h-[700px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 rounded-lg text-black">
        <marquee behavior="" direction="">
          A computer is a machine that can be programmed to carry out sequences
          of arithmetic or logical operations (computation) automatically.
          Modern digital electronic computers can perform generic sets of
          operations known as programs. These programs enable computers to
          perform a wide range of tasks. A computer system is a nominally
          complete computer that includes the hardware, operating system (main
          software), and peripheral equipment needed and used for full
          operation. This term may also refer to a group of computers that are
          linked and function together, such as a computer network or computer
          cluster.
        </marquee>
      </div>
    </section>
  );
};

export default Slider;
