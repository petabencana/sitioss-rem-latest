
import styles from './base_layout.module.css';
const Legend=()=>{
    const gaugeLevelNames:any = {};
    gaugeLevelNames[1] = 'Siaga I';
    gaugeLevelNames[2] = 'Siaga II';
    gaugeLevelNames[3] = 'Siaga III';
    gaugeLevelNames[4] = 'Siaga IV';
return(    
<div className={`${styles.leafletBottom} ${styles.leafletRight}`}>

<div className={`${styles.info} ${styles.legend}`}>
    <div id="reportsLegend">
        <div className={styles.sublegend}>
            <div>
            <img src="assets/floodsIcon.svg" height="22px;" width="auto" style={{verticalAlign:'middle'}}/>
            <span>&nbsp; Laporan Banjir</span>
            </div>
        </div>
    </div>
    <div id="heightsLegend">
        <div className={styles.sublegend}>
            <div style={{fontWeight:'bold'}}>Tinggi Banjir</div>
            <div><i className={styles.color} style={{background:'#CC2A41'}}></i><span>&nbsp;&gt; 150 cm</span></div>
            <div><i className={styles.color} style={{background:'#FF8300'}}></i><span>&nbsp;71 cm &ndash; 150 cm </span></div>
            <div><i className={styles.color} style={{background:'#FFFF00'}}></i><span>&nbsp;10 cm &ndash; 70 cm</span></div>
            <i className={styles.color} style={{background:'#A0A9F7'}}></i><span>&nbsp;Hati-hati</span>
        </div>
    </div>
    <div id="gaugesLegend">
        <div className="{styles.sublegend}">
            <div style={{fontWeight:'bold'}}>Tinggi Muka Air</div>
            <div><img src="/assets/floodgauge_1.svg" height="24px;" width="auto" style={{verticalAlign:'middle'}}/><span>&nbsp;{gaugeLevelNames[1]}</span></div>
            <div><img src="/assets/floodgauge_2.svg" height="24px;" width="auto" style={{verticalAlign:'middle'}}/><span>&nbsp;{gaugeLevelNames[2]}</span></div>
            <div><img src="/assets/floodgauge_3.svg" height="24px;" width="auto" style={{verticalAlign:'middle'}}/><span>&nbsp;{gaugeLevelNames[3]}</span></div>
            <div><img src="/assets/floodgauge_4.svg" height="24px;" width="auto" style={{verticalAlign:'middle'}}/><span>&nbsp;{gaugeLevelNames[4]}</span></div>
        </div>
    </div>

</div>
</div>

);
};
export default Legend;