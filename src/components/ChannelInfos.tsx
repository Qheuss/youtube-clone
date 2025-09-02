import { type Channel } from '../hooks/useChannel';
import styles from './ChannelInfos.module.scss';

interface ChannelInfosProps {
  channel: Channel | null;
}

const ChannelInfos = ({ channel }: ChannelInfosProps) => {
  return (
    <>
      <img
        className={styles.channelBanner}
        src={channel?.brandingSettings.image.bannerExternalUrl}
        alt={channel?.snippet.title + ' banner'}
      />
      <div className={styles.channelInfos + ' flex flex-col items-center'}>
        <div className={styles.channelHeader}>
          <img
            src={channel?.snippet.thumbnails.medium.url}
            alt={`${channel?.snippet.title} thumbnail`}
            className={styles.channelThumbnail}
          />
          <div className={styles.channelDetails}>
            <h2 className={styles.channelTitle}>{channel?.snippet.title}</h2>

            <span className={styles.channelSubscribers}>
              {channel?.statistics.hiddenSubscriberCount
                ? 'Subscribers hidden'
                : `${
                    Number(channel?.statistics.subscriberCount) >= 1000000
                      ? (
                          Number(channel?.statistics.subscriberCount) / 1000000
                        ).toFixed(0) + 'M'
                      : Number(channel?.statistics.subscriberCount) >= 1000
                      ? (
                          Number(channel?.statistics.subscriberCount) / 1000
                        ).toFixed(0) + 'K'
                      : Number(channel?.statistics.subscriberCount)
                  }  subscribers`}
            </span>
            <p className={styles.channelDescription}>
              {channel?.snippet.description.slice(0, 100)} ...
            </p>
            <div className='md:flex items-center justify-between'>
              <p className={styles.channelVideos + ' !mb-3 md:mb-0'}>
                {parseInt(channel!.statistics.videoCount).toLocaleString()}{' '}
                videos
              </p>
              <a
                href={`https://www.youtube.com/channel/${channel?.id}`}
                target='_blank'
                className={styles.subscribeButton}
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChannelInfos;
