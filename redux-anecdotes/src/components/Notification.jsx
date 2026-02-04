import { useSelector } from "react-redux"

const Notification = () => {
  const notification = useSelector(state => state.notification)
  let style = notification
    ? {
      border: 'solid',
      padding: 10,
      borderWidth: 1,
      marginBottom: 10
    }
    : {
      border: 'none',
      padding: 0,
      borderWidth: 0,
      marginBottom: 10
    }

  return <div style={style}>{notification}</div>
}

export default Notification
