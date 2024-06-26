export default function Certificate() {
    const certificate = [
        { name: "Frontend Developer", link: "./Images/certificate/react_dev_hackerrank.png" },
        { name: "JavaScript", link: "./Images/certificate/js_hackerrank.png" },
        { name: "JavaScript", link: "./Images/certificate/js_udemy.png" },
        { name: "JavaScript", link: "./Images/certificate/javaScript.jpg" },
        // { name: "React Js", link: "./Images/certificate/react_hackerrank.png" },
        { name: "React Js", link: "./Images/certificate/react.jpg" },
        { name: "Node Js", link: "./Images/certificate/node.png" },
        { name: "Python", link: "./Images/certificate/python.jpg" },
        { name: "MySQL", link: "./Images/certificate/mySql.jpg" },
        { name: "Google", link: "./Images/certificate/google.png" },
        { name: "Microsoft", link: "./Images/certificate/microsoft.jpg" },
        { name: "Intel", link: "./Images/certificate/intel.png" },
        { name: "IBM", link: "./Images/certificate/ibm.png" },
    ]


    return (
        <div className="absolute inset-0 w-full bg-primary-light overflow-y-auto hide_scrollbar">
            <p className="text-3xl text-center font-medium leading-relaxed my-3 capitalize text-linear-gradient">Online Certificates</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 m-auto px-8 max-w-final pt-8 pb-16">
                {
                    certificate.map((cert, i) => (
                        <div className=" p-6 shadow-2xl aspect-auto hover:bg-white shadow-gray-400 cursor-pointer " key={i}>
                            <img src={cert.link} className="w-full" />
                        </div>
                    ))
                }
            </div>
        </div >
    )
};
