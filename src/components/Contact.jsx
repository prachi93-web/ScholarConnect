import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      await axios.post('https://getform.io/f/bpjpkemb', data)
      toast.success('Feedback sent successfully 🎉')
      reset()
    } catch (error) {
      console.error(error)
      toast.error('Something went wrong 😓')
    }
  }

  return (
    <section id='contact'
    className="max-w-3xl mx-auto px-4 py-16">
      <Toaster />
      <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
        <h2 className="text-3xl font-semibold text-blue-500 mb-2 text-center">Feedback Form</h2>
        <p className="text-gray-500 text-center mb-8">
          We’d love to hear your thoughts. Please share your suggestions or concerns.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Jane Doe"
              {...register('name', { required: true })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            {errors.name && <p className="text-sm text-red-500 mt-1">Name is required.</p>}
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              {...register('email', { required: true })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">Email is required.</p>}
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">Your Feedback</label>
            <textarea
              rows={5}
              placeholder="Tell us what’s on your mind..."
              {...register('message', { required: true })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
            ></textarea>
            {errors.message && <p className="text-sm text-red-500 mt-1">Message is required.</p>}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-all duration-200"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
