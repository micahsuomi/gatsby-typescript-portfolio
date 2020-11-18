import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
} from 'react-share'

import styles from './styles.module.scss'

const ShareButtons = ({ twitterHandle, url, title, tags }: any) => {
  console.log(twitterHandle, url, title, tags)
  return (
    <div className={styles.shareButtonsContainer}>
      <div>
        <h4>Share</h4>
      </div>
      <div className={styles.shareButtonsWrapper}>
        <FacebookShareButton url={url} className={styles.share}>
          <FacebookIcon
            style={{ width: '40px' }}
            className={styles.shareIcon}
          />
        </FacebookShareButton>

        <TwitterShareButton
          url={url}
          title={title}
          via={twitterHandle}
          hashtags={tags}
          className={styles.share}
        >
          <TwitterIcon style={{ width: '40px' }} />
        </TwitterShareButton>

        <LinkedinShareButton url={url} className={styles.share}>
          <LinkedinIcon style={{ width: '40px' }} />
        </LinkedinShareButton>

        <RedditShareButton url={url} title={title} className={styles.share}>
          <RedditIcon style={{ width: '40px' }} />
        </RedditShareButton>

        <WhatsappShareButton url={url} title={title} className={styles.share}>
          <WhatsappIcon style={{ width: '40px' }} />
        </WhatsappShareButton>
      </div>
    </div>
  )
}

export default ShareButtons
