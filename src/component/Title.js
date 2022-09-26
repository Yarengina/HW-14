import { connect } from 'react-redux'

function Title(props) {
  return (
    <div className="card-title">
      <div className="card-title-top">
        <input className='input' type='text' onChange={props.onChangeInput} />
      </div>
      <p>{props.input}</p>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    input: state.input,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeInput: () => {
      const action = {
        type: 'INPUT',
        input: document.querySelector('.input').value,
      }
      console.log(action)
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Title)
