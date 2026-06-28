import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';

const TradingSolutions = () => {
    useDocTitle("Trading Solutions | SigmaOne Capital");
    const [activeTab, setActiveTab] = useState('cash');

    const switchTab = (id) => {
        setActiveTab(id);
        const tabsBar = document.querySelector('.tabs-bar');
        if (tabsBar) {
            tabsBar.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    };

    return (
        <>
            <NavBar />
            
            <div className="trading-solutions-page pt-20">
                <style dangerouslySetInnerHTML={{__html: `
                    .trading-solutions-page {
                      --navy:#0B2447;
                      --navy-mid:#19376D;
                      --blue:#1565C0;
                      --accent:#E8A020;
                      --accent-dim:#FFF3DC;
                      --bg:#F4F8FF;
                      --card:#FFFFFF;
                      --text:#0F172A;
                      --muted:#64748B;
                      --border:#DDE8F8;
                      --green:#16A34A;
                      --green-bg:#F0FDF4;
                      --red:#DC2626;
                      --red-bg:#FEF2F2;
                      --blue-bg:#EBF4FF;
                      
                      background:var(--bg);
                      color:var(--text);
                      line-height:1.6;
                      font-family:'Inter',sans-serif;
                    }

                    .trading-solutions-page .hero{
                      background:linear-gradient(140deg,var(--navy) 0%,#0e3060 55%,var(--navy-mid) 100%);
                      padding:64px 40px 56px;
                      text-align:center;
                      position:relative;
                      overflow:hidden;
                    }
                    .trading-solutions-page .hero::before,.trading-solutions-page .hero::after{
                      content:'';position:absolute;border-radius:50%;pointer-events:none;
                    }
                    .trading-solutions-page .hero::before{
                      width:520px;height:520px;
                      top:-200px;right:-120px;
                      background:radial-gradient(circle,rgba(232,160,32,.12),transparent 70%);
                    }
                    .trading-solutions-page .hero::after{
                      width:400px;height:400px;
                      bottom:-200px;left:-80px;
                      background:radial-gradient(circle,rgba(21,101,192,.18),transparent 70%);
                    }
                    .trading-solutions-page .hero-inner{position:relative;z-index:1;}
                    .trading-solutions-page .breadcrumb{
                      font-size:.72rem;font-weight:600;letter-spacing:.1em;
                      text-transform:uppercase;color:rgba(255,255,255,.4);
                      margin-bottom:18px;
                    }
                    .trading-solutions-page .breadcrumb span{color:var(--accent);}
                    .trading-solutions-page .hero h1{
                      font-family:'Playfair Display',serif;
                      font-size:clamp(2rem,5vw,3.2rem);
                      color:#fff;
                      letter-spacing:-.02em;
                      line-height:1.15;
                      margin-bottom:14px;
                    }
                    .trading-solutions-page .hero h1 em{color:var(--accent);font-style:normal;}
                    .trading-solutions-page .hero p{
                      color:rgba(255,255,255,.6);
                      font-size:1.05rem;
                      font-weight:300;
                      max-width:560px;
                      margin:0 auto;
                    }
                    .trading-solutions-page .hero-stats{
                      display:flex;justify-content:center;gap:48px;
                      margin-top:40px;
                      padding-top:36px;
                      border-top:1px solid rgba(255,255,255,.1);
                    }
                    .trading-solutions-page .hero-stat .num{
                      display:block;
                      font-family:'Playfair Display',serif;
                      font-size:1.9rem;
                      color:var(--accent);
                      line-height:1;
                    }
                    .trading-solutions-page .hero-stat .lbl{
                      font-size:.72rem;font-weight:600;letter-spacing:.08em;
                      text-transform:uppercase;color:rgba(255,255,255,.45);
                      margin-top:4px;
                    }

                    .trading-solutions-page .tabs-bar{
                      background:var(--navy);
                      position:sticky;top:60px;z-index:200;
                      box-shadow:0 4px 24px rgba(0,0,0,.25);
                    }
                    .trading-solutions-page .tabs-scroll{
                      display:flex;overflow-x:auto;
                      scrollbar-width:none;max-width:1200px;margin:0 auto;
                    }
                    .trading-solutions-page .tabs-scroll::-webkit-scrollbar{display:none;}
                    .trading-solutions-page .tab-btn{
                      padding:17px 22px;
                      background:none;border:none;border-bottom:3px solid transparent;
                      color:rgba(255,255,255,.55);
                      font-family:'Inter',sans-serif;font-size:.82rem;font-weight:500;
                      letter-spacing:.03em;white-space:nowrap;cursor:pointer;
                      transition:color .2s,background .2s,border-color .2s;
                    }
                    .trading-solutions-page .tab-btn:hover{color:rgba(255,255,255,.9);background:rgba(255,255,255,.05);}
                    .trading-solutions-page .tab-btn.active{color:var(--accent);border-bottom-color:var(--accent);background:rgba(232,160,32,.07);}

                    .trading-solutions-page .panels-wrap{padding:48px 0 56px;}
                    .trading-solutions-page .container{max-width:1200px;margin:0 auto;padding:0 28px;}
                    .trading-solutions-page .panel{display:none;}
                    .trading-solutions-page .panel.active{display:block;animation:tsfadein .28s ease;}
                    @keyframes tsfadein{from{opacity:0;transform:translateY(6px);}to{opacity:1;transform:translateY(0);}}

                    .trading-solutions-page .panel-grid{
                      display:grid;
                      grid-template-columns:1fr 370px;
                      gap:30px;
                      align-items:start;
                    }

                    .trading-solutions-page .info-card{
                      background:var(--card);
                      border:1px solid var(--border);
                      border-radius:18px;
                      padding:40px 40px 36px;
                      box-shadow:0 4px 28px rgba(11,36,71,.06);
                    }
                    .trading-solutions-page .segment-badge{
                      display:inline-flex;align-items:center;gap:7px;
                      background:var(--accent-dim);color:#92400E;
                      font-size:.7rem;font-weight:700;letter-spacing:.09em;
                      text-transform:uppercase;padding:5px 14px;
                      border-radius:100px;margin-bottom:16px;
                    }
                    .trading-solutions-page .segment-title{
                      font-family:'Playfair Display',serif;
                      font-size:2rem;color:var(--navy);
                      margin-bottom:10px;
                    }
                    .trading-solutions-page .segment-desc{
                      color:var(--muted);font-size:.97rem;line-height:1.75;
                      margin-bottom:28px;padding-bottom:28px;
                      border-bottom:1px solid var(--border);
                    }
                    .trading-solutions-page .sec-label{
                      font-size:.68rem;font-weight:700;letter-spacing:.12em;
                      text-transform:uppercase;color:var(--blue);margin-bottom:10px;
                    }
                    .trading-solutions-page .ideal-box{
                      background:var(--blue-bg);
                      border-left:3px solid var(--blue);
                      border-radius:0 8px 8px 0;
                      padding:13px 18px;
                      color:#1e3a6e;font-size:.93rem;line-height:1.65;
                      margin-bottom:28px;
                    }
                    .trading-solutions-page .feats{
                      list-style:none;
                      display:grid;grid-template-columns:1fr 1fr;gap:11px;
                    }
                    .trading-solutions-page .feats li{
                      display:flex;align-items:flex-start;gap:9px;
                      font-size:.88rem;color:var(--text);line-height:1.5;
                    }
                    .trading-solutions-page .chk{
                      width:20px;height:20px;min-width:20px;
                      background:var(--green-bg);border-radius:50%;
                      display:flex;align-items:center;justify-content:center;
                      margin-top:1px;
                    }
                    .trading-solutions-page .chk svg{width:10px;height:10px;stroke:var(--green);stroke-width:2.5;fill:none;stroke-linecap:round;stroke-linejoin:round;}

                    .trading-solutions-page .right-col{display:flex;flex-direction:column;gap:20px;}

                    .trading-solutions-page .sms-card{
                      background:var(--card);
                      border:1px solid var(--border);
                      border-radius:18px;
                      overflow:hidden;
                      box-shadow:0 4px 28px rgba(11,36,71,.07);
                    }
                    .trading-solutions-page .sms-card-head{
                      background:var(--navy);
                      padding:15px 20px;
                      display:flex;align-items:center;gap:10px;
                    }
                    .trading-solutions-page .pulse{
                      width:8px;height:8px;border-radius:50%;
                      background:#4ADE80;flex-shrink:0;
                      animation:tsglow 2s ease-in-out infinite;
                    }
                    @keyframes tsglow{0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(74,222,128,.4);}50%{opacity:.5;box-shadow:0 0 0 4px rgba(74,222,128,0);}}
                    .trading-solutions-page .sms-card-head-text{
                      font-size:.75rem;font-weight:700;letter-spacing:.07em;
                      text-transform:uppercase;color:rgba(255,255,255,.9);
                    }
                    .trading-solutions-page .sms-card-head-sub{
                      margin-left:auto;font-size:.68rem;
                      color:rgba(255,255,255,.35);
                    }
                    .trading-solutions-page .sms-body{
                      background:#F8FAFC;padding:18px;
                      display:flex;flex-direction:column;gap:10px;
                    }
                    .trading-solutions-page .sms-bubble{
                      background:var(--card);
                      border:1px solid #E2E8F0;
                      border-radius:4px 14px 14px 14px;
                      padding:13px 16px;
                      font-family:'JetBrains Mono',monospace;
                      font-size:.76rem;line-height:1.65;
                      color:var(--text);
                    }
                    .trading-solutions-page .sms-tag{
                      display:inline-block;
                      font-size:.62rem;font-weight:700;letter-spacing:.05em;
                      padding:3px 9px;border-radius:4px;margin-bottom:7px;
                    }
                    .trading-solutions-page .tag-call{background:#DBEAFE;color:#1D4ED8;}
                    .trading-solutions-page .tag-followup{background:#FEF3C7;color:#92400E;}
                    .trading-solutions-page .tag-win{background:#D1FAE5;color:#065F46;}
                    .trading-solutions-page .tag-sl{background:#FEE2E2;color:#991B1B;}
                    .trading-solutions-page .tag-swing{background:#EDE9FE;color:#5B21B6;}
                    .trading-solutions-page .c-buy{color:#16A34A;font-weight:600;}
                    .trading-solutions-page .c-sell{color:#DC2626;font-weight:600;}
                    .trading-solutions-page .c-tgt{color:#1D4ED8;}
                    .trading-solutions-page .c-sl{color:#B91C1C;}
                    .trading-solutions-page .sms-time{font-size:.65rem;color:var(--muted);text-align:right;margin-top:7px;font-family:'Inter',sans-serif;}

                    .trading-solutions-page .note-box{
                      background:var(--card);
                      border:1px solid var(--border);
                      border-radius:14px;
                      padding:18px 20px;
                      font-size:.82rem;color:var(--muted);line-height:1.65;
                    }
                    .trading-solutions-page .note-box strong{
                      display:block;font-size:.7rem;font-weight:700;
                      letter-spacing:.08em;text-transform:uppercase;
                      color:var(--text);margin-bottom:6px;
                    }

                    .trading-solutions-page .rules-section{
                      background:linear-gradient(160deg,var(--navy) 0%,#0e3060 100%);
                      padding:72px 0;
                    }
                    .trading-solutions-page .rules-head{text-align:center;margin-bottom:52px;}
                    .trading-solutions-page .rules-head h2{
                      font-family:'Playfair Display',serif;
                      font-size:2rem;color:#fff;margin-bottom:10px;
                    }
                    .trading-solutions-page .rules-head p{color:rgba(255,255,255,.45);font-size:.9rem;}

                    .trading-solutions-page .rules-grid{
                      display:grid;grid-template-columns:1fr 1fr;gap:28px;
                      margin-bottom:52px;
                    }
                    .trading-solutions-page .rules-card{
                      background:rgba(255,255,255,.05);
                      border:1px solid rgba(255,255,255,.1);
                      border-radius:16px;padding:32px;
                    }
                    .trading-solutions-page .rules-card h3{
                      font-size:.7rem;font-weight:700;letter-spacing:.1em;
                      text-transform:uppercase;color:var(--accent);margin-bottom:22px;
                    }
                    .trading-solutions-page .rules-list{list-style:none;display:flex;flex-direction:column;gap:14px;}
                    .trading-solutions-page .rules-list li{
                      display:flex;gap:14px;align-items:flex-start;
                      color:rgba(255,255,255,.72);font-size:.87rem;line-height:1.6;
                    }
                    .trading-solutions-page .rule-n{
                      font-family:'JetBrains Mono',monospace;font-weight:600;
                      font-size:.72rem;color:var(--accent);flex-shrink:0;padding-top:2px;
                    }

                    .trading-solutions-page .terms-head{
                      text-align:center;margin-bottom:24px;
                    }
                    .trading-solutions-page .terms-head .sec-label{color:var(--accent);margin-bottom:6px;}
                    .trading-solutions-page .terms-head p{color:rgba(255,255,255,.45);font-size:.85rem;}
                    .trading-solutions-page .terms-grid{
                      display:grid;
                      grid-template-columns:repeat(auto-fill,minmax(170px,1fr));
                      gap:10px;
                    }
                    .trading-solutions-page .term-pill{
                      background:rgba(255,255,255,.06);
                      border:1px solid rgba(255,255,255,.1);
                      border-radius:10px;padding:13px 16px;
                    }
                    .trading-solutions-page .term-abbr{
                      font-family:'JetBrains Mono',monospace;
                      font-weight:600;font-size:.85rem;color:var(--accent);
                    }
                    .trading-solutions-page .term-full{color:rgba(255,255,255,.5);font-size:.74rem;margin-top:3px;}

                    .trading-solutions-page .disclaimer{
                      background:#EEF3FB;border-top:1px solid var(--border);
                      padding:24px 28px;text-align:center;
                      font-size:.77rem;color:var(--muted);line-height:1.75;
                      max-width:900px;margin:0 auto;
                    }
                    .trading-solutions-page .disclaimer strong{color:var(--text);}
                    .trading-solutions-page .disclaimer-wrap{background:#EEF3FB;border-top:1px solid var(--border);}

                    @media(max-width:960px){
                      .trading-solutions-page .panel-grid{grid-template-columns:1fr;}
                      .trading-solutions-page .right-col{flex-direction:row;flex-wrap:wrap;}
                      .trading-solutions-page .sms-card,.trading-solutions-page .note-box{flex:1;min-width:260px;}
                      .trading-solutions-page .rules-grid{grid-template-columns:1fr;}
                    }
                    @media(max-width:640px){
                      .trading-solutions-page .hero{padding:48px 20px 44px;}
                      .trading-solutions-page .hero-stats{gap:28px;}
                      .trading-solutions-page .info-card{padding:24px;}
                      .trading-solutions-page .feats{grid-template-columns:1fr;}
                      .trading-solutions-page .tabs-bar .tab-btn{padding:14px 16px;font-size:.78rem;}
                      .trading-solutions-page .terms-grid{grid-template-columns:repeat(2,1fr);}
                    }
                `}} />

                {/* HERO */}
                <header className="hero">
                    <div className="hero-inner">
                        <p className="breadcrumb">Home &nbsp;›&nbsp; <span>Trading Solutions</span></p>
                        <h1>Expert Advisory Across<br/><em>Every Market Segment</em></h1>
                        <p>Precision-timed calls with defined targets and stop losses — delivered directly to your phone via SMS & WhatsApp.</p>
                        <div className="hero-stats">
                            <div className="hero-stat"><span className="num">7</span><span className="lbl">Market Segments</span></div>
                            <div className="hero-stat"><span className="num">2</span><span className="lbl">Targets Per Call</span></div>
                            <div className="hero-stat"><span className="num">24×7</span><span className="lbl">Customer Support</span></div>
                            <div className="hero-stat"><span className="num">SMS</span><span className="lbl">& WhatsApp Alerts</span></div>
                        </div>
                    </div>
                </header>

                {/* STICKY TABS */}
                <div className="tabs-bar" role="tablist">
                    <div className="tabs-scroll">
                        <button className={`tab-btn ${activeTab === 'cash' ? 'active' : ''}`} onClick={() => switchTab('cash')} role="tab">Stock Cash</button>
                        <button className={`tab-btn ${activeTab === 'sfut' ? 'active' : ''}`} onClick={() => switchTab('sfut')} role="tab">Stock Future</button>
                        <button className={`tab-btn ${activeTab === 'sopt' ? 'active' : ''}`} onClick={() => switchTab('sopt')} role="tab">Stock Option</button>
                        <button className={`tab-btn ${activeTab === 'iopt' ? 'active' : ''}`} onClick={() => switchTab('iopt')} role="tab">Index Option</button>
                        <button className={`tab-btn ${activeTab === 'ifut' ? 'active' : ''}`} onClick={() => switchTab('ifut')} role="tab">Index Future</button>
                        <button className={`tab-btn ${activeTab === 'mcx' ? 'active' : ''}`} onClick={() => switchTab('mcx')} role="tab">Commodity (MCX)</button>
                        <button className={`tab-btn ${activeTab === 'elite' ? 'active' : ''}`} onClick={() => switchTab('elite')} role="tab">Sigma Elite</button>
                    </div>
                </div>

                {/* PANELS WRAP */}
                <div className="panels-wrap">
                    <div className="container">

                        {/* STOCK CASH */}
                        <div className={`panel ${activeTab === 'cash' ? 'active' : ''}`} id="p-cash">
                            <div className="panel-grid">
                                <div className="info-card">
                                    <div className="segment-badge">📈 Cash Market</div>
                                    <h2 className="segment-title">Stock Cash</h2>
                                    <p className="segment-desc">A service crafted for intraday traders and investors aiming to capture high-probability opportunities in the Cash Market. Every call is precision-timed with fully defined risk parameters so you always know your exact entry, targets, and stop loss before placing a trade.</p>
                                    <div className="sec-label">Ideal For</div>
                                    <div className="ideal-box">Traders & Investors who actively participate in the cash intraday market and want to capitalise on intraday price movements with controlled, pre-defined risk.</div>
                                    <div className="sec-label" style={{ marginTop: '24px' }}>Features</div>
                                    <ul className="feats">
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>2–3 calls per day (market-dependent)</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Purely intraday — zero overnight risk</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>2 targets + defined Stop Loss per call</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Regular market updates throughout session</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Calls delivered via SMS & WhatsApp</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Follow-up message on every recommendation</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>24×7 Customer Support</li>
                                    </ul>
                                </div>
                                <div className="right-col">
                                    <div className="sms-card">
                                        <div className="sms-card-head">
                                            <div className="pulse"></div>
                                            <span className="sms-card-head-text">Sample Call Flow</span>
                                            <span className="sms-card-head-sub">Illustrative only</span>
                                        </div>
                                        <div className="sms-body">
                                            <div className="sms-bubble">
                                                <span className="sms-tag tag-call">📣 CALL</span><br/>
                                                SIGMAONE CAPITAL<br/>
                                                <span class="c-buy" className="c-buy">BUY ICICIBANK</span> AT 1300<br/>
                                                <span class="c-tgt" className="c-tgt">TGT 1320 / 1340</span><br/>
                                                <span class="c-sl" className="c-sl">SL 1285</span>
                                                <div className="sms-time">09:45 AM</div>
                                            </div>
                                            <div className="sms-bubble">
                                                <span className="sms-tag tag-followup">🔔 FOLLOW UP</span><br/>
                                                ICICIBANK TGT 1 ACHIEVED @1320<br/>
                                                BOOK 50% — TRAIL SL TO COST
                                                <div className="sms-time">11:20 AM</div>
                                            </div>
                                            <div className="sms-bubble">
                                                <span className="sms-tag tag-win">✅ FINAL TARGET</span><br/>
                                                ICICIBANK TGT 2 ACHIEVED @1340<br/>
                                                BOOK FULL PROFIT
                                                <div className="sms-time">12:55 PM</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="note-box">
                                        <strong>📌 Position Management</strong>
                                        Book 50% quantity on TGT 1, revise Stop Loss to cost price for remaining 50%, and hold for TGT 2.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* STOCK FUTURE */}
                        <div className={`panel ${activeTab === 'sfut' ? 'active' : ''}`} id="p-sfut">
                            <div className="panel-grid">
                                <div className="info-card">
                                    <div className="segment-badge">⚡ F&amp;O Segment</div>
                                    <h2 className="segment-title">Stock Future</h2>
                                    <p className="segment-desc">Leverage the power of Stock Futures for amplified returns with controlled risk. Designed for traders who want larger position exposure without deploying full capital — using margin-efficient strategies with defined risk at every step.</p>
                                    <div className="sec-label">Ideal For</div>
                                    <div className="ideal-box">Experienced traders familiar with the F&amp;O segment who seek leveraged exposure to individual stocks for intraday or short-term positional plays.</div>
                                    <div className="sec-label" style={{ marginTop: '24px' }}>Features</div>
                                    <ul className="feats">
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>1–2 high-conviction calls per day</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Intraday &amp; short-term positions</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>2 targets + strict Stop Loss per call</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Margin-efficient lot sizing guidance</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Calls delivered via SMS & WhatsApp</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Real-time follow-ups on all calls</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>24×7 Customer Support</li>
                                    </ul>
                                </div>
                                <div className="right-col">
                                    <div className="sms-card">
                                        <div className="sms-card-head">
                                            <div className="pulse"></div>
                                            <span className="sms-card-head-text">Sample Call Flow</span>
                                            <span className="sms-card-head-sub">Illustrative only</span>
                                        </div>
                                        <div className="sms-body">
                                            <div className="sms-bubble">
                                                <span className="sms-tag tag-call">📣 CALL</span><br/>
                                                SIGMAONE CAPITAL<br/>
                                                <span className="c-buy">BUY TATASTEEL FUT</span> AT 165<br/>
                                                <span className="c-tgt">TGT 168 / 172</span><br/>
                                                <span className="c-sl">SL 162</span>
                                                <div className="sms-time">09:32 AM</div>
                                            </div>
                                            <div className="sms-bubble">
                                                <span className="sms-tag tag-followup">🔔 FOLLOW UP</span><br/>
                                                TATASTEEL FUT TGT 1 ACHIEVED @168<br/>
                                                BOOK 50% — TRAIL SL TO COST
                                                <div className="sms-time">10:45 AM</div>
                                            </div>
                                            <div className="sms-bubble">
                                                <span className="sms-tag tag-win">✅ FINAL TARGET</span><br/>
                                                TATASTEEL FUT TGT 2 ACHIEVED @172<br/>
                                                BOOK FULL PROFIT
                                                <div className="sms-time">12:10 PM</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="note-box">
                                        <strong>⚠️ Risk Note</strong>
                                        Futures carry amplified risk due to leverage. Always trade with a strict stop loss and position size appropriately relative to your capital.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* STOCK OPTION */}
                        <div className={`panel ${activeTab === 'sopt' ? 'active' : ''}`} id="p-sopt">
                            <div className="panel-grid">
                                <div className="info-card">
                                    <div className="segment-badge">🎯 Options Segment</div>
                                    <h2 className="segment-title">Stock Option</h2>
                                    <p className="segment-desc">Capture strong directional moves in individual stocks through strategic option buying at optimal strikes and expiries. Your maximum loss is always capped to the premium paid — making this ideal for asymmetric reward-to-risk setups.</p>
                                    <div className="sec-label">Ideal For</div>
                                    <div className="ideal-box">Option buyers seeking high-risk-reward opportunities in individual stock options, where the downside is limited to premium paid and upside potential is substantial.</div>
                                    <div className="sec-label" style={{ marginTop: '24px' }}>Features</div>
                                    <ul className="feats">
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>1–2 options calls per day</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Specific entry price, strike &amp; expiry provided</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Risk always capped to premium paid</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Clear target &amp; exit levels on every call</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Calls delivered via SMS & WhatsApp</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Real-time updates and follow-ups</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>24×7 Customer Support</li>
                                    </ul>
                                </div>
                                <div className="right-col">
                                    <div className="sms-card">
                                        <div className="sms-card-head">
                                            <div className="pulse"></div>
                                            <span className="sms-card-head-text">Sample Call Flow</span>
                                            <span className="sms-card-head-sub">Illustrative only</span>
                                        </div>
                                        <div className="sms-body">
                                            <div className="sms-bubble">
                                                <span className="sms-tag tag-call">📣 CALL</span><br/>
                                                SIGMAONE CAPITAL<br/>
                                                <span className="c-buy">BUY RELIANCE 2800CE</span><br/>
                                                (CURRENT EXPIRY) AT 45<br/>
                                                <span className="c-tgt">TGT 65 / 90</span><br/>
                                                <span className="c-sl">SL 30</span>
                                                <div className="sms-time">09:35 AM</div>
                                            </div>
                                            <div className="sms-bubble">
                                                <span className="sms-tag tag-followup">🔔 FOLLOW UP</span><br/>
                                                RELIANCE 2800CE TGT 1 ACHIEVED @65<br/>
                                                BOOK 50% — TRAIL SL TO COST
                                                <div className="sms-time">11:00 AM</div>
                                            </div>
                                            <div className="sms-bubble">
                                                <span className="sms-tag tag-win">✅ FINAL TARGET</span><br/>
                                                RELIANCE 2800CE TGT 2 ACHIEVED @90<br/>
                                                BOOK FULL PROFIT
                                                <div className="sms-time">01:30 PM</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="note-box">
                                        <strong>📌 Options Note</strong>
                                        Book 50% at TGT 1 to protect capital. Let remaining position ride to TGT 2. Exit immediately if SL is hit — time decay accelerates losses on held options.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* INDEX OPTION */}
                        <div className={`panel ${activeTab === 'iopt' ? 'active' : ''}`} id="p-iopt">
                            <div className="panel-grid">
                                <div className="info-card">
                                    <div className="segment-badge">🔷 Index Derivatives</div>
                                    <h2 className="segment-title">Index Option</h2>
                                    <p className="segment-desc">Trade the market's pulse through Nifty, BankNifty, and FinNifty options. Our Index Option service identifies high-probability setups in the most liquid derivatives on the exchange, with clear entry and exit levels for every call.</p>
                                    <div className="sec-label">Ideal For</div>
                                    <div className="ideal-box">Option buyers seeking high-risk-reward opportunities in individual stock options, where the downside is limited to premium paid and upside potential is substantial.</div>
                                    <div className="sec-label" style={{ marginTop: '24px' }}>Features</div>
                                    <ul className="feats">
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>2–3 calls per day</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Weekly &amp; monthly expiry strategies</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Covers Nifty, BankNifty &amp; FinNifty</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Premium-based risk management</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Calls delivered via SMS & WhatsApp</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Real-time follow-ups on all calls</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>24×7 Customer Support</li>
                                    </ul>
                                </div>
                                <div className="right-col">
                                    <div className="sms-card">
                                        <div className="sms-card-head">
                                            <div className="pulse"></div>
                                            <span className="sms-card-head-text">Sample Call Flow</span>
                                            <span className="sms-card-head-sub">Illustrative only</span>
                                        </div>
                                        <div className="sms-body">
                                            <div className="sms-bubble">
                                                <span className="sms-tag tag-call">📣 CALL</span><br/>
                                                SIGMAONE CAPITAL<br/>
                                                <span className="c-buy">BUY NIFTY 24000CE</span><br/>
                                                (WEEKLY EXPIRY) AT 120<br/>
                                                <span className="c-tgt">TGT 180 / 250</span><br/>
                                                <span className="c-sl">SL 75</span>
                                                <div className="sms-time">09:40 AM</div>
                                            </div>
                                            <div className="sms-bubble">
                                                <span className="sms-tag tag-followup">🔔 FOLLOW UP</span><br/>
                                                NIFTY 24000CE TGT 1 ACHIEVED @180<br/>
                                                BOOK 50% — TRAIL SL TO COST
                                                <div className="sms-time">11:15 AM</div>
                                            </div>
                                            <div className="sms-bubble">
                                                <span className="sms-tag tag-win">✅ FINAL TARGET</span><br/>
                                                NIFTY 24000CE TGT 2 ACHIEVED @250<br/>
                                                BOOK FULL PROFIT
                                                <div className="sms-time">01:45 PM</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="note-box">
                                        <strong>📌 Index Options Note</strong>
                                        Index options are highly sensitive to market moves and time decay. Avoid holding illiquid deep OTM strikes near expiry. Always honour SL without hesitation.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* INDEX FUTURE */}
                        <div className={`panel ${activeTab === 'ifut' ? 'active' : ''}`} id="p-ifut">
                            <div className="panel-grid">
                                <div className="info-card">
                                    <div className="segment-badge">📊 Index Futures</div>
                                    <h2 className="segment-title">Index Future</h2>
                                    <p className="segment-desc">Directional trades on Nifty and BankNifty futures for traders who prefer defined lot-size exposure to broader market movements. Suitable for both intraday momentum plays and short-term positional holdings.</p>
                                    <div className="sec-label">Ideal For</div>
                                    <div className="ideal-box">Traders seeking leveraged exposure to Nifty or BankNifty index movements through futures, for intraday momentum trades or short-term positional strategies.</div>
                                    <div className="sec-label" style={{ marginTop: '24px' }}>Features</div>
                                    <ul className="feats">
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>1–2 calls per day</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Intraday &amp; positional both</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>2 targets + strict Stop Loss per call</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Index-level market analysis provided</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Calls delivered via SMS & WhatsApp</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Real-time updates during market hours</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>24×7 Customer Support</li>
                                    </ul>
                                </div>
                                <div className="right-col">
                                    <div className="sms-card">
                                        <div className="sms-card-head">
                                            <div className="pulse"></div>
                                            <span className="sms-card-head-text">Sample Call Flow</span>
                                            <span className="sms-card-head-sub">Illustrative only</span>
                                        </div>
                                        <div className="sms-body">
                                            <div className="sms-bubble">
                                                <span className="sms-tag tag-call">📣 CALL</span><br/>
                                                SIGMAONE CAPITAL<br/>
                                                <span className="c-buy">BUY NIFTY FUT</span> AT 23850<br/>
                                                <span className="c-tgt">TGT 23950 / 24050</span><br/>
                                                <span className="c-sl">SL 23780</span>
                                                <div className="sms-time">09:38 AM</div>
                                            </div>
                                            <div className="sms-bubble">
                                                <span className="sms-tag tag-followup">🔔 FOLLOW UP</span><br/>
                                                NIFTY FUT TGT 1 ACHIEVED @23950<br/>
                                                BOOK 50% — TRAIL SL TO COST
                                                <div className="sms-time">11:05 AM</div>
                                            </div>
                                            <div className="sms-bubble">
                                                <span className="sms-tag tag-win">✅ FINAL TARGET</span><br/>
                                                NIFTY FUT TGT 2 ACHIEVED @24050<br/>
                                                BOOK FULL PROFIT
                                                <div className="sms-time">12:30 PM</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="note-box">
                                        <strong>📌 Index Futures Note</strong>
                                        Nifty &amp; BankNifty futures move with the broader market. Monitor global cues and open interest data for best entry accuracy.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* COMMODITY MCX */}
                        <div className={`panel ${activeTab === 'mcx' ? 'active' : ''}`} id="p-mcx">
                            <div className="panel-grid">
                                <div className="info-card">
                                    <div className="segment-badge">🪙 MCX Segment</div>
                                    <h2 className="segment-title">Commodity (MCX)</h2>
                                    <p className="segment-desc">Navigate the commodity markets with expert calls on Gold, Silver, Crude Oil, Natural Gas and more. Our MCX service covers both the morning and evening trading sessions, giving you opportunities across the full trading day.</p>
                                    <div className="sec-label">Ideal For</div>
                                    <div className="ideal-box">Traders diversifying into commodities, or those looking for hedging opportunities in precious metals, energy, and agri-commodities traded on the MCX platform.</div>
                                    <div className="sec-label" style={{ marginTop: '24px' }}>Features</div>
                                    <ul className="feats">
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>2–3 calls per session (day + evening)</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Covers Gold, Silver, Crude Oil &amp; Nat Gas</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>2 targets + Stop Loss on every call</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Morning &amp; evening session coverage</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Global commodity context included</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Calls delivered via SMS & WhatsApp</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>24×7 Customer Support</li>
                                    </ul>
                                </div>
                                <div className="right-col">
                                    <div className="sms-card">
                                        <div className="sms-card-head">
                                            <div className="pulse"></div>
                                            <span className="sms-card-head-text">Sample Call Flow</span>
                                            <span className="sms-card-head-sub">Illustrative only</span>
                                        </div>
                                        <div className="sms-body">
                                            <div className="sms-bubble">
                                                <span className="sms-tag tag-call">📣 CALL</span><br/>
                                                SIGMAONE CAPITAL<br/>
                                                <span className="c-buy">BUY GOLD MCX</span> AT 92500<br/>
                                                <span className="c-tgt">TGT 93000 / 93500</span><br/>
                                                <span className="c-sl">SL 91800</span>
                                                <div className="sms-time">10:30 AM</div>
                                            </div>
                                            <div className="sms-bubble">
                                                <span className="sms-tag tag-followup">🔔 FOLLOW UP</span><br/>
                                                GOLD MCX TGT 1 ACHIEVED @93000<br/>
                                                BOOK 50% — TRAIL SL TO COST
                                                <div className="sms-time">01:20 PM</div>
                                            </div>
                                            <div className="sms-bubble">
                                                <span className="sms-tag tag-win">✅ FINAL TARGET</span><br/>
                                                GOLD MCX TGT 2 ACHIEVED @93500<br/>
                                                BOOK FULL PROFIT
                                                <div className="sms-time">03:45 PM</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="note-box">
                                        <strong>📌 MCX Note</strong>
                                        Commodity prices are influenced by global cues, USD/INR movement, and geopolitical events. Stay updated on international market news for context.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SIGMA ELITE */}
                        <div className={`panel ${activeTab === 'elite' ? 'active' : ''}`} id="p-elite">
                            <div className="panel-grid">
                                <div className="info-card">
                                    <div className="segment-badge">👑 Premium Service</div>
                                    <h2 className="segment-title">Sigma Elite</h2>
                                    <p className="segment-desc">Our flagship swing and positional advisory. Sigma Elite combines fundamental triggers with technical timing to identify high-conviction, medium-term opportunities across sectors — built for those who prioritise quality of calls over frequency.</p>
                                    <div className="sec-label">Ideal For</div>
                                    <div className="ideal-box">Investors and traders seeking medium-term swing (3–15 days) to positional (1–3 months) opportunities without the stress of daily screen monitoring. Covers both Cash and F&amp;O segments.</div>
                                    <div className="sec-label" style={{ marginTop: '24px' }}>Features</div>
                                    <ul className="feats">
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>3–5 carefully curated calls per week</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Swing (3–15 days) + Positional (1–3 months)</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Both Cash &amp; F&amp;O recommendations</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Research rationale provided with every call</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>3 targets + trailing SL strategy</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Sector rotation &amp; thematic analysis</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Weekly market outlook report</li>
                                        <li><span className="chk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>24×7 Premium Customer Support</li>
                                    </ul>
                                </div>
                                <div className="right-col">
                                    <div className="sms-card">
                                        <div className="sms-card-head">
                                            <div className="pulse"></div>
                                            <span className="sms-card-head-text">Sample Call Flow</span>
                                            <span className="sms-card-head-sub">Illustrative only</span>
                                        </div>
                                        <div className="sms-body">
                                            <div className="sms-bubble">
                                                <span className="sms-tag tag-swing">📣 SWING CALL</span><br/>
                                                SIGMAONE CAPITAL — SIGMA ELITE<br/>
                                                <span className="c-buy">BUY LTIM</span> AT 5200<br/>
                                                <span className="c-tgt">TGT 5450 / 5700 / 6000</span><br/>
                                                <span className="c-sl">SL 4950</span><br/>
                                                HOLDING PERIOD: 15–20 DAYS
                                                <div className="sms-time">Mon, 10:15 AM</div>
                                            </div>
                                            <div className="sms-bubble">
                                                <span className="sms-tag tag-followup">🔔 UPDATE</span><br/>
                                                LTIM TGT 1 ACHIEVED @5450<br/>
                                                BOOK 30% — TRAIL SL TO 5100
                                                <div className="sms-time">Thu, 02:30 PM</div>
                                            </div>
                                            <div className="sms-bubble">
                                                <span className="sms-tag tag-win">✅ TGT 2 ACHIEVED</span><br/>
                                                LTIM TGT 2 ACHIEVED @5700<br/>
                                                BOOK ANOTHER 30% — TRAIL SL TO 5400
                                                <div className="sms-time">Following Mon</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="note-box">
                                        <strong>👑 Sigma Elite Note</strong>
                                        Avoid panic-exiting on minor intraday dips. Trust the research, respect only the designated SL, and let each trade play out over its intended holding period.
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* TRADING RULES */}
                <section className="rules-section">
                    <div className="container">
                        <div className="rules-head">
                            <h2>Trading Rules</h2>
                            <p>Mandatory guidelines for all SigmaOne Capital subscribers — follow these at all times</p>
                        </div>

                        <div className="rules-grid">
                            <div className="rules-card">
                                <h3>📋 Mandatory Rules</h3>
                                <ul className="rules-list">
                                    <li><span className="rule-n">01</span><span>Never overtrade. Stick strictly to the calls sent — do not chase the market independently.</span></li>
                                    <li><span className="rule-n">02</span><span>Only act on research recommendations received via SMS or WhatsApp from SigmaOne Capital.</span></li>
                                    <li><span className="rule-n">03</span><span>Trade equal quantity across all given calls with proper SL and targets so risk &amp; reward remain balanced and manageable.</span></li>
                                    <li><span className="rule-n">04</span><span>Always execute a strict Stop Loss on every recommendation — no exceptions, no averaging down against a losing position.</span></li>
                                    <li><span className="rule-n">05</span><span>Profit and Loss are subject to market risk. There is no guarantee or assurance of returns on any recommendation.</span></li>
                                </ul>
                            </div>

                            <div className="rules-card">
                                <h3>🧠 Discipline &amp; Mindset</h3>
                                <ul className="rules-list">
                                    <li><span className="rule-n">06</span><span>Never be emotional or greedy while trading. Always book profits as per your daily goals and plan.</span></li>
                                    <li><span className="rule-n">07</span><span>Do not over-leverage — especially in volatile, low-liquidity, or event-driven market conditions.</span></li>
                                    <li><span className="rule-n">08</span><span>If an "AVOID" message is sent, do not execute that call. Avoided calls are not counted in our performance records.</span></li>
                                    <li><span className="rule-n">09</span><span>If a modification or revision message is received for a call, follow the updated instruction promptly and precisely.</span></li>
                                    <li><span className="rule-n">10</span><span>For swing/positional calls, do not panic-exit on minor intraday movements — respect only the designated Stop Loss level.</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* TERMINOLOGY */}
                        <div className="terms-head">
                            <div className="sec-label">Terminology Reference</div>
                            <p>Standard abbreviations used in all SigmaOne Capital recommendations</p>
                        </div>
                        <div className="terms-grid">
                            <div className="term-pill"><div className="term-abbr">CMP</div><div class="term-full" className="term-full">Current Market Price</div></div>
                            <div className="term-pill"><div className="term-abbr">TGT</div><div className="term-full">Target Price</div></div>
                            <div className="term-pill"><div className="term-abbr">SL</div><div className="term-full">Stop Loss</div></div>
                            <div className="term-pill"><div className="term-abbr">BUY</div><div className="term-full">Go Long / Enter Buy</div></div>
                            <div className="term-pill"><div className="term-abbr">SELL</div><div className="term-full">Short Sell / Exit Long</div></div>
                            <div className="term-pill"><div className="term-abbr">ABOVE</div><div className="term-full">Enter only if price crosses above level</div></div>
                            <div className="term-pill"><div className="term-abbr">BELOW</div><div className="term-full">Enter only if price breaks below level</div></div>
                            <div className="term-pill"><div className="term-abbr">NEAR</div><div className="term-full">Enter around the given price range</div></div>
                            <div className="term-pill"><div className="term-abbr">AVOID</div><div className="term-full">Do not execute — call is cancelled</div></div>
                        </div>
                    </div>
                </section>

                {/* DISCLAIMER */}
                <div className="disclaimer-wrap">
                    <p className="disclaimer">
                        <strong>Disclaimer:</strong> The securities quoted in sample calls above are for illustrative purposes only and are not recommendatory in nature. Investments in securities markets are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future results. SigmaOne Capital is a SEBI Registered Research Analyst. Registration does not guarantee the quality of research or assure any returns.
                    </p>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default TradingSolutions;
