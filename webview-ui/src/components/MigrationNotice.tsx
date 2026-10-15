import { Button } from './ui/Button.js';

interface MigrationNoticeProps {
  onDismiss: () => void;
}

export function MigrationNotice({ onDismiss }: MigrationNoticeProps) {
  return (
    <div
      className="absolute inset-0 bg-black/70 flex items-center justify-center z-100"
      onClick={onDismiss}
    >
      <div
        className="pixel-panel py-24 px-32 max-w-xl text-center leading-[1.3]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-5xl mb-12 text-accent">我們要向你道歉！</div>
        <p className="text-xl m-0 mb-12">
          我們剛換成完全開源、從頭用心製作的素材，因此你先前的辦公室配置必須重設。
        </p>
        <p className="text-xl m-0 mb-12">對此我們深感抱歉。</p>
        <p className="text-xl m-0 mb-12">
          好消息是：這只會發生一次，也為之後更精彩的更新鋪好了路。
        </p>
        <p className="text-xl m-0 mb-20">敬請期待，感謝你使用 Pixel Agents！</p>
        <Button variant="accent" size="xl" onClick={onDismiss}>
          知道了
        </Button>
      </div>
    </div>
  );
}
