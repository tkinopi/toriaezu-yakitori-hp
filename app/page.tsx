"use client";
import { useState } from "react";

const tabs = ["トップ", "メニュー", "店舗情報", "ご予約"] as const;
type Tab = (typeof tabs)[number];

function EmberDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "48px 0 40px" }}>
      <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
      <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
    </div>
  );
}

function TopSection() {
  return (
    <div>
      <div className="hero-pad" style={{ padding: "80px 0 60px", textAlign: "center" }}>
        <p className="section-title-en" style={{ marginBottom: 16 }}>SUMIBIYAKITORI</p>
        <h1 className="hero-title">炭火焼鳥<br />とりあえず</h1>
        <p className="hero-sub" style={{ marginTop: 20, lineHeight: 2 }}>備長炭の炎で、一本一本丁寧に。<br />福岡・今泉で味わう、素材の旨みと炭の薫り。</p>
        <div style={{ marginTop: 36, display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <a href="tel:092-600-4076" style={{ display: "inline-block", padding: "14px 36px", background: "var(--accent)", color: "#fff", textDecoration: "none", letterSpacing: "0.1em", fontSize: 14, whiteSpace: "nowrap" }}>電話で予約する</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener" style={{ display: "inline-block", padding: "14px 36px", border: "1px solid var(--border-light)", color: "var(--text)", textDecoration: "none", letterSpacing: "0.1em", fontSize: 14, whiteSpace: "nowrap" }}>Instagram</a>
        </div>
      </div>
      <EmberDivider />
      <section style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
        <p className="section-title-en" style={{ marginBottom: 12 }}>CONCEPT</p>
        <h2 className="section-title" style={{ marginBottom: 24 }}>炭火と素材、<br />ただそれだけ。</h2>
        <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 2.2 }}>厳選した朝引きの鶏を、熟練の技で一本一本焼き上げます。備長炭の遠赤外線で外はカリッと、中はしっとりジューシーに。素材の持つ本来の旨みを引き出す、シンプルだからこそのこだわり。お一人様でもふらっと立ち寄れる、カウンター越しの炭火を眺めながらの一杯をどうぞ。</p>
      </section>
      <EmberDivider />
      <section>
        <div className="grid-3">
          {[{ title: "朝引き鶏", desc: "毎朝仕入れる新鮮な鶏肉。その日の最高の状態でご提供します。" }, { title: "備長炭焼き", desc: "高温の備長炭で一気に焼き上げ、素材の旨みを閉じ込めます。" }, { title: "大将の手仕事", desc: "串打ち三年、焼き一生。一本一本に心を込めた職人の仕事。" }].map((item) => (<div key={item.title} style={{ padding: 28, background: "var(--bg-card)", border: "1px solid var(--border)", textAlign: "center" }}><h3 style={{ fontSize: 18, color: "var(--accent)", marginBottom: 12, letterSpacing: "0.08em" }}>{item.title}</h3><p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.9 }}>{item.desc}</p></div>))}
        </div>
      </section>
      <EmberDivider />
      <section style={{ background: "var(--bg-card)", border: "1px solid var(--border)", padding: "24px 32px" }}>
        <div className="info-bar">
          <div><span style={{ fontSize: 12, color: "var(--text-dim)", letterSpacing: "0.1em" }}>営業時間</span><p style={{ fontSize: 15, marginTop: 4 }}>16:00 〜 23:00（木曜定休）</p></div>
          <div><span style={{ fontSize: 12, color: "var(--text-dim)", letterSpacing: "0.1em" }}>予算目安</span><p style={{ fontSize: 15, marginTop: 4 }}>¥2,000 〜 ¥3,000</p></div>
          <div><span style={{ fontSize: 12, color: "var(--text-dim)", letterSpacing: "0.1em" }}>席数</span><p style={{ fontSize: 15, marginTop: 4 }}>カウンター約10席</p></div>
        </div>
      </section>
    </div>
  );
}

function MenuSection() {
  const yakitori = [{ name: "もも（塩／タレ）", price: "¥180" },{ name: "せせり", price: "¥200" },{ name: "レバー", price: "¥180" },{ name: "つくね", price: "¥200" },{ name: "ぼんじり", price: "¥200" },{ name: "手羽先", price: "¥220" },{ name: "皮", price: "¥150" },{ name: "ハツ", price: "¥180" },{ name: "砂肝", price: "¥180" },{ name: "ねぎま", price: "¥200" },{ name: "ささみ（わさび）", price: "¥220" },{ name: "鶏の白レバー", price: "¥250" }];
  const sides = [{ name: "手羽先の唐揚げ", price: "¥480" },{ name: "厚揚げ", price: "¥380" },{ name: "鶏皮ポン酢", price: "¥420" },{ name: "焼き野菜盛り合わせ", price: "¥580" },{ name: "だし巻き玉子", price: "¥480" },{ name: "キャベツ（お通し）", price: "—" }];
  const drinks = [{ name: "生ビール（エビス）", price: "¥580" },{ name: "ハイボール", price: "¥450" },{ name: "レモンサワー", price: "¥420" },{ name: "芋焼酎（各種）", price: "¥500〜" },{ name: "日本酒（冷／熱燗）", price: "¥550〜" },{ name: "ソフトドリンク", price: "¥300" }];
  const renderMenu = (items) => items.map((item) => (<div key={item.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", background: "var(--bg-card)", borderBottom: "1px solid var(--border)" }}><span style={{ fontSize: 15 }}>{item.name}</span><span style={{ fontSize: 14, color: "var(--accent)", whiteSpace: "nowrap", marginLeft: 16 }}>{item.price}</span></div>));
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 48 }}><p className="section-title-en" style={{ marginBottom: 12 }}>MENU</p><h2 className="section-title">お品書き</h2><p style={{ color: "var(--text-muted)", fontSize: 13, marginTop: 8 }}>※ 価格は税込・仕入れ状況により変更あり</p></div>
      <h3 style={{ fontSize: 18, color: "var(--accent)", marginBottom: 16, letterSpacing: "0.1em", textAlign: "center" }}>— 焼鳥 —</h3>
      <div className="grid-2-menu">{renderMenu(yakitori)}</div>
      <EmberDivider />
      <h3 style={{ fontSize: 18, color: "var(--accent)", marginBottom: 16, letterSpacing: "0.1em", textAlign: "center" }}>— 一品料理 —</h3>
      <div className="grid-2-menu">{renderMenu(sides)}</div>
      <EmberDivider />
      <h3 style={{ fontSize: 18, color: "var(--accent)", marginBottom: 16, letterSpacing: "0.1em", textAlign: "center" }}>— ドリンク —</h3>
      <div className="grid-2-menu">{renderMenu(drinks)}</div>
    </div>
  );
}

function ShopInfoSection() {
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 48 }}><p className="section-title-en" style={{ marginBottom: 12 }}>ACCESS</p><h2 className="section-title">店舗情報・アクセス</h2></div>
      <div className="grid-2">
        <div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
            {[["店名","炭火焼鳥 とりあえず"],["住所","〒810-0021\n福岡県福岡市中央区今泉2丁目4-4\nヴィラージュ天神 106"],["電話","092-600-4076"],["営業時間","16:00 〜 23:00\n（土日 13:00 〜 22:00）"],["定休日","木曜日"],["席数","カウンター約10席"],["予算","¥2,000 〜 ¥3,000"],["アクセス","西鉄天神大牟田線\n薬院駅 徒歩5分"]].map(([l,v]) => (<tr key={l} style={{ borderBottom: "1px solid var(--border)" }}><td style={{ padding: "14px 16px 14px 0", fontSize: 13, color: "var(--accent)", verticalAlign: "top", whiteSpace: "nowrap", width: 90 }}>{l}</td><td style={{ padding: "14px 0", fontSize: 15, whiteSpace: "pre-line" }}>{v}</td></tr>))}
            </tbody>
          </table>
        </div>
        <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.4!2d130.3969598!3d33.5836627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354191e88e535243%3A0xad26abd0925b74a!2z54Kt54Gr54S86bOlIOOBqOOCiuOBguOBiOOBmg!5e0!3m2!1sja!2sjp!4v1700000000000" width="100%" height="100%" style={{ border: 0, minHeight: 320 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
      </div>
    </div>
  );
}

function ReservationSection() {
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 48 }}><p className="section-title-en" style={{ marginBottom: 12 }}>RESERVATION</p><h2 className="section-title">ご予約・お問い合わせ</h2></div>
      <div className="contact-grid">
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", padding: 32, textAlign: "center" }}>
          <p style={{ fontSize: 13, color: "var(--text-dim)", letterSpacing: "0.1em", marginBottom: 16 }}>お電話でのご予約</p>
          <a href="tel:092-600-4076" style={{ fontSize: 28, color: "var(--accent)", textDecoration: "none", letterSpacing: "0.05em", fontWeight: 600, wordBreak: "break-all" }}>092-600-4076</a>
          <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 12 }}>受付時間: 16:00 〜 22:00</p>
          <a href="tel:092-600-4076" style={{ display: "inline-block", marginTop: 20, padding: "14px 40px", background: "var(--accent)", color: "#fff", textDecoration: "none", letterSpacing: "0.1em", fontSize: 14, whiteSpace: "nowrap" }}>電話をかける</a>
        </div>
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", padding: 32, textAlign: "center" }}>
          <p style={{ fontSize: 13, color: "var(--text-dim)", letterSpacing: "0.1em", marginBottom: 16 }}>SNSでのお問い合わせ</p>
          <p style={{ fontSize: 20, color: "var(--text)", marginBottom: 8, letterSpacing: "0.05em" }}>Instagram</p>
          <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.9, marginBottom: 20 }}>DMでもお気軽にお問い合わせください。<br />最新の情報はInstagramで発信しています。</p>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener" style={{ display: "inline-block", padding: "14px 40px", border: "1px solid var(--border-light)", color: "var(--text)", textDecoration: "none", letterSpacing: "0.1em", fontSize: 14, whiteSpace: "nowrap" }}>Instagramを見る</a>
        </div>
      </div>
      <div style={{ marginTop: 32, textAlign: "center", padding: 24, background: "var(--bg-card)", border: "1px solid var(--border)" }}>
        <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 2 }}>※ お一人様でもお気軽にどうぞ。カウンター席をご用意しております。<br />※ 満席の場合はお断りすることがございます。ご了承ください。<br />※ 食べログからもご予約いただけます。</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("トップ");
  return (
    <>
      <header style={{ borderBottom: "1px solid var(--border)", position: "sticky", top: 0, zIndex: 100, background: "var(--bg)" }}>
        <div className="site-header-inner" style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ fontSize: 16, letterSpacing: "0.12em", fontWeight: 600 }}><span style={{ color: "var(--accent)" }}>炭火焼鳥</span><span style={{ marginLeft: 6 }}>とりあえず</span></div>
          <nav className="site-nav">
            {tabs.map((tab) => (<button key={tab} onClick={() => setActiveTab(tab)} style={{ padding: "20px 18px", background: "none", border: "none", cursor: "pointer", fontSize: 13, letterSpacing: "0.08em", whiteSpace: "nowrap", color: activeTab === tab ? "var(--accent)" : "var(--text-muted)", borderBottom: activeTab === tab ? "2px solid var(--accent)" : "2px solid transparent", transition: "color 0.2s, border-color 0.2s" }}>{tab}</button>))}
          </nav>
        </div>
      </header>
      <main className="main-pad" style={{ paddingTop: 48 }}>
        {activeTab === "トップ" && <TopSection />}
        {activeTab === "メニュー" && <MenuSection />}
        {activeTab === "店舗情報" && <ShopInfoSection />}
        {activeTab === "ご予約" && <ReservationSection />}
      </main>
      <footer style={{ borderTop: "1px solid var(--border)", padding: "32px 24px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "var(--text-dim)", letterSpacing: "0.1em" }}>&copy; 2024 炭火焼鳥 とりあえず. All rights reserved.</p>
      </footer>
    </>
  );
}
