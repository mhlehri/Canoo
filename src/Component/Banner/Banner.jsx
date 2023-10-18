import { Typography } from "@material-tailwind/react";

export function ImgWithBlurredCaption() {
  return (
    <figure className="relative h-[80vh] w-full">
      <img
        className="h-full w-full object-cover object-center"
        src="https://i.ibb.co/hMpWkFT/peter-broomfield-m3m-ln-R90u-M-unsplash.jpg"
        alt="nature image"
      />
      <figcaption className="absolute bottom-1/3  left-1/4 flex  -translate-x-1/4 justify-between rounded-xl border border-white/75  dark:border-black/50 bg-white/75 dark:bg-black/50 py-4 px-6 shadow-lg shadow-black/5 dark:shadow-white/20 saturate-200 backdrop-blur">
        <div>
          <Typography
            variant="h5"
            color="blue-gray"
            className="dark:text-white"
          >
            <span className="text-2xl font-black">Canoo:</span> Redefining
            Luxury <br /> Electric Vehicles <br /> for Tomorrow's Roads
          </Typography>
          <Typography color="gray" className="mt-2 font-normal">
            Since 2004
          </Typography>
        </div>
      </figcaption>
    </figure>
  );
}
