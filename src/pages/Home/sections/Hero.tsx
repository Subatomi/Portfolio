import TextRevealLeft from "../components/TextRevealLeft"
import { config } from "../../../config";
export default function Hero() {


    return (
        <div className="flex w-full  min-h-dvh flex-col justify-center mt-10 sm:mt-24">
            <div className="h-full flex  flex-col justify-around gap-20 sm:justify-center ">
                
                <div className=" flex sm:hidden flex-col w-full items-center ">
                    <h3 className="text-xs font-bold text-white">HELLO I'M</h3>
                    
                    <TextRevealLeft delay={1} stagger={0.2} animateOnScroll={false}>
                        <h1 className="text-xl md:text-4xl font-untitledSans font-bold text-center sm:text-left text-white ">
                        THEODORE A. <br /> LADERA
                        </h1>
                    </TextRevealLeft>
                </div>

                <div className="pt-10  flex-row justify-around items-center w-full h-full hidden sm:flex">        
                    <div className="flex flex-col font-TronicaMono justify-start -translate-y-30 ">
                        <h2 className="text-left text-2xl">
                        HELLO I'M
                        </h2>
                        <TextRevealLeft delay={1} stagger={0.2} animateOnScroll={false}>
                            <h1 className="text-xl md:text-4xl font-untitledSans font-bold text-left text-white ">
                            THEODORE A. <br /> LADERA
                            </h1>
                        </TextRevealLeft>
                    </div>

                    <div className="relative h-full flex flex-col items-center justify-center ">
                        <div className="relative text-xl md:text-4xl">
                            
                            <h3 className="pl-10 text-left text-3xl font-untitledSans font-bold">A</h3>
                            <h2>
                                <TextRevealLeft delay={1} stagger={0.2} animateOnScroll={false}>
                                <div className=" text-left pl-4 font-untitledSans font-bold ">FullStack Developer</div>
                                </TextRevealLeft>
                            </h2>
                        </div>
                    </div>
                </div>

                <div className=" flex sm:hidden flex-col w-full items-center ">
                    <h2>
                        <TextRevealLeft delay={1} stagger={0.2} animateOnScroll={false}>
                            <div className=" text-left pl-4 font-untitledSans font-bold -translate-y-3">
                                FullStack Developer
                            </div>
                        </TextRevealLeft>
                    </h2>
                </div>
            </div>


            <div className="flex flex-col w-full items-center justify-center p-6 sm:p-20">
                <div className="border-4 border-graybackground p-6 sm:p-8 w-full max-w-7xl mx-auto">
                    <h2 className="font-untitledSans text-base sm:text-2xl">
                        {config.about.description}
                    </h2>
                </div>
            </div>
        </div>
    )
        
}

