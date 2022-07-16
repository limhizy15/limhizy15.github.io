import Image from 'next/image';
import styles from '../styles/Home.module.css';

const MeetMe = () => {
  return (
    <div>
      <Image
        src="https://media.istockphoto.com/vectors/free-3d-speech-bubble-sign-vector-id1156404289?k=20&m=1156404289&s=612x612&w=0&h=jpzVSuwyf8D33nng1wyGe80GRj9B5r7RvWA2_rf2bvc="
        alt='john doe avatar'
        width={150}
        height={150}
        className={styles.img}
      />
      <p className={styles.p}>
        Hey, I am <strong>John Doe</strong>. I love coding. Lorem ipsum dolor
        sit, amet consectetur adipisicing elit. Reiciendis commodi numquam
        incidunt blanditiis quibusdam atque natus inventore sunt autem iusto.
      </p>
    </div>
  );
};

export default MeetMe;
