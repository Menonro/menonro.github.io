import React from 'react'
import MinMaxYears from './MinMaxYears'

export default function BrandWorks({ works }) {
  return (
    <div>
      <span>
        Проекты: { works.length }
      </span>
      <span>
        <MinMaxYears works={works}/>
      </span>
      <style jsx>{`
        div {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        span:nth-child(odd) {
          margin-right: 0.25rem;
        }
        span:nth-child(even) {
          margin-left: 0.25rem;
          text-align: right;
        }  
      `}</style>
    </div>
  )
}
