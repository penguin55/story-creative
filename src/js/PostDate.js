import { msg } from '@lit/localize';

class PostDate {
    static months = [
        msg("Januari"), msg("Februari"), msg("Maret"), msg("April"), msg("Mei"), msg("Juni"), msg("Juli"), msg("Agustus"), msg("September"), msg("Oktober"), msg("November"), msg("Desember")
    ]

    static deltaTime = [msg('detik'), msg('menit'), msg('jam'), msg('hari')]

    static reformatPostDate(date){
        let postDate = new Date(date).getSeconds();
        let deltaDate = Date.now() - postDate;

        let time = '';
        let diposting = msg("Diposting");
        let lalu = msg("lalu");
        
        if (deltaDate < 60) time = `${diposting} ${deltaDate} ${this.deltaTime[0]} ${lalu}`;
        else if (deltaDate < 3600) {
            deltaDate = Math.floor(deltaDate/60);
            time = `${diposting} ${deltaDate} ${this.deltaTime[1]} ${lalu}`;
        }
        else if (deltaDate < 86400) {
            deltaDate = Math.floor(deltaDate/3600);
            time = `${diposting} ${deltaDate} ${this.deltaTime[2]} ${lalu}`;
        }
        else if (deltaDate < 172800) {
            deltaDate = Math.floor(deltaDate/86400);
            time = `${diposting} ${deltaDate} ${this.deltaTime[3]} ${lalu}`;
        }
        else {
            let rawDate = new Date(date);
            time = `${diposting} ${rawDate.getDate()} ${this.months[rawDate.getMonth()]} ${rawDate.getFullYear()}`;
        }

        return time;
    }
}

export {PostDate}