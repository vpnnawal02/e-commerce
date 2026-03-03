import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'

const About = () => {
    return (
        <div className="">
            <div className='text-2xl text-center pt-8 border-t'>
                <Title text1={"ABOUT"} text2={'US'} />
            </div>
            <div className="my-10 flex flex-col md:flex-row gap-16">
                <img src={assets.about_img} className='w-full md:max-w-[450px]' />
                <div className="flex flex-col justify-center ggap-6 md:w-2/4 text-gray-600">
                    <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam rerum eaque optio qui ipsa harum, soluta nesciunt cum. Nulla repellendus consequuntur, impedit iste ipsa ex quo culpa odio nostrum mollitia.</p>
                    <p className="">ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati autem itaque harum ea! Maiores odio temporibus praesentium quos ab corporis, provident vero optio dolore quisquam nemo, dolor fuga, consectetur quasi.</p>
                    <b className='text-gray-800 py-5'>Our Mission</b>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit repudiandae deleniti exercitationem omnis odio sequi deserunt at et quis veritatis itaque nostrum eaque blanditiis natus debitis beatae, sit magni.</p>
                </div>
            </div>

            <div className="text-xl py-4">
                <Title text1={'WHY'} text2={'CHOOSE US'} />
            </div>

            <div className="flex flex-col md:flex-row text-sm mb-20 gap-5">
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Quality Assurance:</b>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eius dolore assumenda sapiente, perferendis quod molestiae autem voluptatem, nostrum aspernatur dignissimos debitis corporis sed dolorum magnam. Neque obcaecati dolores amet?</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Convenience:</b>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eius dolore assumenda sapiente, perferendis quod molestiae autem voluptatem, nostrum aspernatur dignissimos debitis corporis sed dolorum magnam. Neque obcaecati dolores amet?</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Exceptional Customer Service:</b>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eius dolore assumenda sapiente, perferendis quod molestiae autem voluptatem, nostrum aspernatur dignissimos debitis corporis sed dolorum magnam. Neque obcaecati dolores amet?</p>
                </div>
            </div>

        </div>

    )
}

export default About
