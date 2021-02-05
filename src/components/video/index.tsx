import ReactPlayer from 'react-player/lazy'
import styles from './styles.module.scss'

export const VideoPlayer = ({ src }) => {

  return (
    <div className={styles.player}>
      <ReactPlayer url={src}
        playing={true}
        controls={true}
        stopOnUnmount={false}
        muted={true}
        loop={true}>
      </ReactPlayer>
    </div>
  )
}