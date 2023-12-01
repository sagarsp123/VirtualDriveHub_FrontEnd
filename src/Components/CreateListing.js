
import { PhotoIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import logo from '../assets/car.jpg';
import '../App.css';

export default function CreateListing() {
    const [listing,setListing] = useState({})
  return (
    <div
      className='flex min-h-screen' style={{ color: 'white' }}>
      <div
      className='flex-shrink-0 w-1/2'
      style={{
        paddingTop : '20px',
        background: `linear-gradient(rgba(1, 0, 0, 0.09), rgba(1, 0, 0, 0.09)), url(${logo}) center / cover no-repeat`,
      }}
        
    >
    </div>

    <div className='p-6 lg:px-10'>
    
    <form className="border border-gray-900 p-8">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h1 className="text-2xl font-extrabold leading-7 text-gray-900">New Car Listing</h1>

          <div className="border-b border-gray-900/10 pb-12">
          <hr></hr>
          <br></br>
          <h2 className="text-base font-bold leading-7 text-gray-900">Car Details</h2>
          
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="MakerName" className="block text-sm font-medium leading-6 text-gray-900">
                Maker
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="MakerName"
                  id="MakerName"
                  autoComplete="MakerName"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="model" className="block text-sm font-medium leading-6 text-gray-900">
                Car Model
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="model"
                  id="model"
                  autoComplete="model"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="trim" className="block text-sm font-medium leading-6 text-gray-900">
                Trim
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="trim"
                  id="trim"
                  autoComplete="trim"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div className="sm:col-span-4">
              <label htmlFor="body_type" className="block text-sm font-medium leading-6 text-gray-900">
                Body Type
              </label>
              <div className="mt-2">
                <input
                  id="body_type"
                  name="body_type"
                  type="text"
                  autoComplete="body_type"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="year" className="block text-sm font-medium leading-6 text-gray-900">
                Year
              </label>
              <div className="mt-2">
                <select
                  id="year"
                  name="year"
                  autoComplete="year"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                  <option>2014</option>
                  <option>2013</option>
                  <option>2012</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="mileage" className="block text-sm font-medium leading-6 text-gray-900">
                Mileage
              </label>
              <div className="mt-2">
                <input
                  id="mileage"
                  name="mileage"
                  type="number"
                  autoComplete="mileage"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="sale_status" className="block text-sm font-medium leading-6 text-gray-900">
                Sale Status
              </label>
              <div className="mt-2">
                <select
                  id="sale_status"
                  name="sale_status"
                  autoComplete="sale_status"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Available</option>
                  <option>Sold</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                Price
              </label>
              <div className="mt-2">
                <input
                  id="price"
                  name="price"
                  type="number"
                  autoComplete="price"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


              </div>
        </div>
        
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <h2 className="text-base font-bold leading-7 text-gray-900">Location</h2>
          
          <div className="col-span-full">
              <label htmlFor="addressLine1" className="block text-sm font-medium leading-6 text-gray-900">
                Address Line 1
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="addressLine1"
                  id="addressLine1"
                  autoComplete="addressLine1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
          </div>

          <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="city"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">
                State Abbreviation
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="state"
                  id="state"
                  autoComplete="state"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="zip5" className="block text-sm font-medium leading-6 text-gray-900">
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="zip5"
                  id="zip5"
                  autoComplete="zip5"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-bold leading-7 text-gray-900">Car Equipment Details</h2>
          <div className="col-span-full">
            <br></br>
              <label htmlFor="equipment_details" className="block text-sm font-medium leading-6 text-gray-900">
                Equipment Information
              </label>
              <div className="mt-2">
                <textarea
                  id="equipment_details"
                  name="equipment_details"
                  rows={3}
                  value={listing.equipment_details}
                  onChange={(e)=>setListing(prev=>{return {...prev,"description":e.target.value}})}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Mention the car equipments in the field</p>
            </div>
        </div>

        <div>
        <label htmlFor="image_url" className="block text-sm font-medium leading-6 text-gray-900">
                Image URL
          </label>
          <input
          type="file"
          id="image_url"
          accept="image/*"
          // onChange={handleImageChange}
        />
        </div>

      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </div>
    </form>
    </div>
    </div>
  )
}
