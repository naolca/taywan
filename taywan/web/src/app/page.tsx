import Image from "next/image";
import Login from "./login/page";
import {
  Bebas_Neue as Header_font,
  M_PLUS_1p as Body_font,

} from '@next/font/google'

const header_font = Header_font(
  {
    subsets: ['latin'],
    variable: "--font-header",
    weight: "400"
  }
);

const body_font = Body_font(
  {
    subsets: ['latin'],
    variable: "--font-body",
    weight: "400"
  }


);

{/* <style jsx global>
  {
    `
    :root {
      --font-header:${header_font.style.fontFamily};
      --font-body:${body_font.style.fontFamily};
    }
    `
  }

</style> */}



export default function Home() {
 
  
  

  return (
   <div className="h-full border border-red-400 ">
        <Login />
   </div>
  );
}
