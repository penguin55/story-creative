import { msg } from '@lit/localize';

class PostDate {
    static getMonths(month){
        const januari = msg("Januari");
        const februari = msg("Februari");
        const maret = msg("Maret");
        const april = msg("April");
        const mei = msg("Mei");
        const juni = msg("Juni");
        const juli = msg("Juli");
        const agustus = msg("Agustus");
        const september = msg("September");
        const oktober = msg("Oktober");
        const november = msg("November");
        const desember = msg("Desember");

        const months = [januari, februari, maret, april, mei, juni, juli, agustus, september, oktober, november, desember];

        return months[month];
    }

    static getDeltaTime(time){
        const detik = msg("detik");
        const menit = msg("menit");
        const jam = msg("jam");
        const hari = msg("hari");

        const deltaTime = [detik, menit, jam, hari];

        return deltaTime[time];
    }

    static reformatPostDate(date){
        let postDate = new Date(date).getTime();
        let deltaDate = Math.round((Date.now() - postDate) / 1000);

        let time = '';
        let diposting = msg("Diposting");
        let lalu = msg("lalu");
        
        if (deltaDate < 60) {
            //Terdapaat perbedaan waktu dengan server dicoding dan laptop lokal saya, jadi tidak memakai ini
            //time = `${diposting} ${deltaDate} ${this.getDeltaTime[0]} ${lalu}`; 
            time = `${msg("Baru saja diposting")}`;
        }
        else if (deltaDate < 3600) {
            deltaDate = Math.floor(deltaDate/60);
            time = `${diposting} ${deltaDate} ${this.getDeltaTime(1)} ${lalu}`;
        }
        else if (deltaDate < 86400) {
            deltaDate = Math.floor(deltaDate/3600);
            time = `${diposting} ${deltaDate} ${this.getDeltaTime(2)} ${lalu}`;
        }
        else if (deltaDate < 172800) {
            deltaDate = Math.floor(deltaDate/86400);
            time = `${diposting} ${deltaDate} ${this.getDeltaTime(3)} ${lalu}`;
        }
        else {
            let rawDate = new Date(date);
            time = `${diposting} ${rawDate.getDate()} ${this.getMonths(rawDate.getMonth())} ${rawDate.getFullYear()}`;
        }

        return time;
    }
}

export {PostDate}