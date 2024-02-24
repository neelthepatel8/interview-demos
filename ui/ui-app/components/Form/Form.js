import React from 'react'

const Form = () => {
  return (
    <div className='w-1/3 h-2/3 rounded-lg overflow-hidden border-highlight-light border-solid border-2'>
      <div className='font-bold text-highlight bg-highlight-light py-3 px-4'>Field Builder</div>
      <div className='flex flex-row py-8 px-8'>
        <div>
          <div>Label</div>
          <div>Type</div>
          <div>Default Value</div>
          <div>Choices</div>
          <div>Order</div>
        </div>
        <div>
          <div><input /></div>
          <div><input /></div>
          <div><input /></div>
          <div><input /></div>
          <div><input /></div>
          <div>
            <button className='bg-success-button text-white px-4 py-2 rounded font-bold border-none'>Save Changes</button>
            <span className='px-3'>Or</span>
            <button className='bg-primary-bg text-cancel-button font-bold border-none'>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form