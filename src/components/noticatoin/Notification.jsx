import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeNotification } from "../../features/notification/notificationSlice";

function Notification() {
  const { message, type } = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      dispatch(removeNotification());
    }, 2500);

    return () => clearTimeout(timer);
  }, [message, dispatch]);

  if (!message) return null;

  const baseStyle =
    "fixed top-5 right-5 z-50 px-5 py-3 rounded-lg shadow-md border flex items-center gap-2 transition-all duration-300 backdrop-blur";

  const typeStyles = {
    success:
      "bg-green-100/80 text-green-800 border-green-300",
    error:
      "bg-red-100/80 text-red-800 border-red-300",
    info:
      "bg-blue-100/80 text-blue-800 border-blue-300",
    warning:
      "bg-yellow-100/80 text-yellow-800 border-yellow-300",
  };

  return (
    <div className={`${baseStyle} ${typeStyles[type] || typeStyles.info}`}>
      {message}
    </div>
  );
}

export default Notification;
