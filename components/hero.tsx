"use client";
import NexgLogo from "./NexgLogo";
import { Button, Input } from "@nextui-org/react";
export const Hero = () => {
  return (
    <section className="h-full lg:w-1/2">
      <section className="relative">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5 max-w-4xl mx-auto text-center justify-center">
            <div className="flex items-center justify-center">
              <NexgLogo width="15em" height="6em" className="" />
            </div>

            <h2 className="text-4xl text-white font-extrabold mx-auto md:text-5xl">
              Build and scale up your startup with the best tools
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400">
              Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="justify-center items-center sm:flex"
            >
              <Input
                size="sm"
                type="email"
                label="Email"
                labelPlacement="inside"
                fullWidth={true}
              />
              <Button
                color="primary"
                variant="shadow"
                className="gap-x-8 py-6 px-10 mt-3 w-full text-sm bg-primary bg-opacity-10 duration-150 rounded-lg hover:bg-opacity-20 sm:mt-0 sm:w-auto sm:ml-2"
              >
                Empezar
              </Button>
            </form>
          </div>
        </div>
        <div
          className="absolute inset-0 m-auto max-w-xs h-[180px] blur-[140px] w-[800px] sm:max-w-md md:max-w-lg"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(82, 255, 197, 0.5) 35%, rgba(0, 191, 255, 0.6) 50%, rgba(100, 149, 237, 0.7) 65%, rgba(70, 130, 180, 0.8) 80%, rgba(25, 25, 112, 0.9) 100%)",
          }}
        ></div>
      </section>
    </section>
  );
};
