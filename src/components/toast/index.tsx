import React from 'react'
import ReactDOM from 'react-dom';
import './index.less'

//  function (props: any) {
//   let timer = useRef<any>(null)

//   const [show, setShow] = useState(props.show)
//   console.log('props.show', props.show)
//   useEffect(() => {
//     console.log('show', show)
//     if (show) {
//       timer.current = setTimeout(() => {
//         setShow(false)
//       }, 2000)
//     }
//   }, [show])

//   useEffect(() => {
//     clearTimeout(timer.current)
//     timer.current = setTimeout(() => {
//       setShow(false)
//     }, 2000)
//   }, [props.msg])

//   return ReactDOM.createPortal(<div
//     className="toast" style={{ display: show ? 'block' : 'none' }}
//   >
//     {props.msg}
//   </div>, document.body)
// }

export default class Toast extends React.Component<any, any> {

  private timer: any = null
  constructor(props: any) {
    super(props)
    this.state = {
      show: false,
      msg: ''
    }
    // @ts-ignore 
    Toast.showToast = this.show.bind(this)
  }

  public show(msg: string) {
    clearTimeout(this.timer)

    this.setState({
      show: true,
      msg
    }, () => {
      this.stopTimer()
    })
  }

  private stopTimer() {
    this.timer = setTimeout(() => {
      this.setState({
        show: false
      })
    }, 2000)
  }

  render() {
    return ReactDOM.createPortal(<div
      className="toast" style={{ display: this.state.show ? 'block' : 'none' }}
    >
      {this.state.msg}
    </div>, document.body)
  }
}

/**
 * {
      React.Children.map(props.children, child => <div>
          {child}
        </div>)
    }
 */