import { Toast } from 'react-bootstrap';
import { useNotificationContext } from '../../../contexts/NotificationContext';
import './Notification.css';

const Notification = () => {
    const { notification } = useNotificationContext();

    if (!notification.show) {
        return null;
    }

    return (
        <Toast className="notification d-inline-block m-1" bg={notification.type}>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" 
                className="rounded me-2" alt="" />
                <strong className="me-auto">New Notification</strong>
            </Toast.Header>
            <Toast.Body className="text">
                {notification.message}
            </Toast.Body>
        </Toast>
    );
};

export default Notification;