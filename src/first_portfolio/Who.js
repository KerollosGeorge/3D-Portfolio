import './Who.css'
import Test from './Test'
export default function Who() {
  return (
    <section className='f_who'>
          <div className='left_square'>
              <Test/>
          </div>
          <div className='fwho_content'>
            <h1>Think outside the Square Space</h1>
            <h4><div className='before_text'></div> Who we Do</h4>
            <p>a creative group of designers and developers with a passion for the art</p>
            <button>see our works</button>
          </div>
    </section>
  )
}
