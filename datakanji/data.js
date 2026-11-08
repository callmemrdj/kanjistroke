var D = {};
// Data: kanji|goresan|arti|kun|on|tema|radikal|kata(teks,bacaan,arti;...)
var X = `
#N5
一|1|satu|ひと.つ|イチ、イツ|Angka|一|一つ,ひとつ,satu;一月,いちがつ,Januari;一人,ひとり,satu orang
二|2|dua|ふた.つ|ニ|Angka|二|二つ,ふたつ,dua;二月,にがつ,Februari;二人,ふたり,dua orang
三|3|tiga|み.つ|サン|Angka|一|三つ,みっつ,tiga;三月,さんがつ,Maret;三日,みっか,tanggal 3
四|5|empat|よ.つ、よん|シ|Angka|囗|四つ,よっつ,empat;四月,しがつ,April;四人,よにん,empat orang
五|4|lima|いつ.つ|ゴ|Angka|二|五つ,いつつ,lima;五月,ごがつ,Mei;五日,いつか,tanggal 5
六|4|enam|む.つ|ロク|Angka|八|六つ,むっつ,enam;六月,ろくがつ,Juni;六日,むいか,tanggal 6
七|2|tujuh|なな.つ、なの|シチ|Angka|一|七つ,ななつ,tujuh;七月,しちがつ,Juli;七日,なのか,tanggal 7
八|2|delapan|や.つ|ハチ|Angka|八|八つ,やっつ,delapan;八月,はちがつ,Agustus;八百屋,やおや,toko sayur
九|2|sembilan|ここの.つ|キュウ、ク|Angka|乙|九つ,ここのつ,sembilan;九月,くがつ,September;九日,ここのか,tanggal 9
十|2|sepuluh|とお、と|ジュウ|Angka|十|十,とお,sepuluh;十月,じゅうがつ,Oktober;十分,じゅうぶん,cukup
百|6|seratus|—|ヒャク|Angka|白|百,ひゃく,seratus;三百,さんびゃく,tiga ratus;百円,ひゃくえん,100 yen
千|3|seribu|ち|セン|Angka|十|千,せん,seribu;三千,さんぜん,tiga ribu;千円,せんえん,1.000 yen
万|3|sepuluh ribu|—|マン、バン|Angka|一|一万,いちまん,sepuluh ribu;万円,まんえん,10.000 yen;万年筆,まんねんひつ,pulpen tinta
円|4|yen/lingkaran|まる.い|エン|Uang|冂|円,えん,yen;百円,ひゃくえん,100 yen;円い,まるい,bulat
時|10|waktu/jam|とき|ジ|Waktu|日|時間,じかん,waktu;時計,とけい,jam;一時,いちじ,pukul satu
金|8|emas/uang|かね|キン、コン|Uang|金|お金,おかね,uang;金曜日,きんようび,hari Jumat;金色,きんいろ,warna emas
先|6|sebelum,dahulu,ujung|さき,まず|セン|Waktu dan Urutan|儿|先生,せんせい,guru;先週,せんしゅう,minggu lalu;先月,せんげつ,bulan lalu;先日,せんじつ,hari yang lalu;先輩,せんぱい,senior;先頭,せんとう,barisan paling depan
生|5|hidup,lahir,mentah|いきる,うまれる,うむ,なま,き|セイ,ショウ|Kehidupan dan Manusia|生|学生,がくせい,siswa;先生,せんせい,guru;生活,せいかつ,kehidupan;誕生,たんじょう,kelahiran;生年月日,せいねんがっぴ,tanggal lahir;生産,せいさん,produksi
学|8|belajar,ilmu|まなぶ|ガク|Pendidikan dan Pengetahuan|子|学生,がくせい,siswa;学校,がっこう,sekolah;大学,だいがく,universitas;学習,がくしゅう,pembelajaran;文学,ぶんがく,sastra;留学,りゅうがく,belajar di luar negeri
人|2|orang,manusia|ひと|ジン,ニン|Manusia dan Masyarakat|人|日本人,にほんじん,orang Jepang;外国人,がいこくじん,orang asing;人口,じんこう,jumlah penduduk;人生,じんせい,kehidupan manusia;一人,ひとり,satu orang;三人,さんにん,tiga orang
日|4|hari,matahari|ひ,か|ニチ,ジツ|Waktu dan Alam|日|日本,にほん,Jepang;今日,きょう,hari ini;毎日,まいにち,setiap hari;日曜日,にちようび,hari Minggu;昨日,きのう,kemarin;日記,にっき,buku harian
本|5|buku,asal,utama|もと|ホン|Pendidikan dan Benda|木|日本,にほん,Jepang;本当,ほんとう,benar;本屋,ほんや,toko buku;本日,ほんじつ,hari ini;本物,ほんもの,benda asli;基本,きほん,dasar
水|4|air|みず|スイ|Alam dan Benda|水|水曜日,すいようび,hari Rabu;水道,すいどう,saluran air;水泳,すいえい,renang;水分,すいぶん,kandungan air;水着,みずぎ,baju renang;飲料水,いんりょうすい,air minum
火|4|api|ひ,ほ|カ|Alam dan Benda|火|火曜日,かようび,hari Selasa;火事,かじ,kebakaran;火山,かざん,gunung berapi;花火,はなび,kembang api;火力,かりょく,kekuatan api;火災,かさい,kebakaran
山|3|gunung|やま|サン|Alam dan Geografi|山|山田,やまだ,nama keluarga Yamada;火山,かざん,gunung berapi;登山,とざん,mendaki gunung;山道,やまみち,jalan pegunungan;山頂,さんちょう,puncak gunung;富士山,ふじさん,Gunung Fuji
大|3|besar|おおきい,おおいに|ダイ,タイ|Ukuran dan Sifat|大|大学,だいがく,universitas;大切,たいせつ,penting;大人,おとな,orang dewasa;大雨,おおあめ,hujan deras;大事,だいじ,penting;大成功,だいせいこう,kesuksesan besar
小|3|kecil|ちいさい,こ,お|ショウ|Ukuran dan Sifat|小|小学校,しょうがっこう,sekolah dasar;小学生,しょうがくせい,siswa SD;小説,しょうせつ,novel;小鳥,ことり,burung kecil;小川,おがわ,sungai kecil;大小,だいしょう,besar dan kecil
中|4|tengah,dalam|なか|チュウ,ジュウ|Posisi dan Tempat|丨|中国,ちゅうごく,Tiongkok;中学校,ちゅうがっこう,SMP;中学生,ちゅうがくせい,siswa SMP;中心,ちゅうしん,pusat;途中,とちゅう,di tengah perjalanan;一日中,いちにちじゅう,sepanjang hari
校|10|sekolah| - |コウ|Pendidikan dan Institusi|木|学校,がっこう,sekolah;高校,こうこう,SMA;高校生,こうこうせい,siswa SMA;校長,こうちょう,kepala sekolah;校庭,こうてい,halaman sekolah;転校,てんこう,pindah sekolah
年|6|tahun,usia|とし|ネン|Waktu dan Kalender|干|今年,ことし,tahun ini;去年,きょねん,tahun lalu;来年,らいねん,tahun depan;毎年,まいとし,setiap tahun;年齢,ねんれい,usia;一年生,いちねんせい,siswa tahun pertama
月|4|bulan,bulan di langit|つき|ゲツ,ガツ|Waktu dan Alam|月|月曜日,げつようび,hari Senin;一月,いちがつ,Januari;今月,こんげつ,bulan ini;先月,せんげつ,bulan lalu;来月,らいげつ,bulan depan;月見,つきみ,melihat bulan
木|4|pohon,kayu|き,こ|モク,ボク|Alam dan Tumbuhan|木|木曜日,もくようび,hari Kamis;木材,もくざい,kayu bahan bangunan;木造,もくぞう,konstruksi kayu;大木,たいぼく,pohon besar;植木,うえき,tanaman hias;木の葉,このは,daun pohon
土|3|tanah|つち|ド,ト|Alam dan Benda|土|土地,とち,tanah;土曜日,どようび,hari Sabtu;土産,みやげ,oleh-oleh;土台,どだい,fondasi;土木,どぼく,teknik sipil;国土,こくど,wilayah negara
曜|18|hari dalam minggu| - |ヨウ|Waktu dan Kalender|日|曜日,ようび,hari dalam minggu;月曜日,げつようび,hari Senin;火曜日,かようび,hari Selasa;水曜日,すいようび,hari Rabu;金曜日,きんようび,hari Jumat;日曜日,にちようび,hari Minggu
上|3|atas, naik|うえ,あがる,あげる,のぼる|ジョウ,ショウ|Posisi dan Arah|一|上手,じょうず,pandai;上着,うわぎ,jaket;上司,じょうし,atasan;上がる,あがる,naik;以上,いじょう,lebih dari;屋上,おくじょう,atap gedung
下|3|bawah, turun|した,しも,さがる,さげる,くだる,おりる|カ,ゲ|Posisi dan Arah|一|下手,へた,tidak mahir;地下,ちか,bawah tanah;下着,したぎ,pakaian dalam;下がる,さがる,turun;以下,いか,di bawah;地下鉄,ちかてつ,kereta bawah tanah
左|5|kiri|ひだり|サ|Posisi dan Arah|工|左手,ひだりて,tangan kiri;左側,ひだりがわ,sisi kiri;左右,さゆう,kiri dan kanan;左折,させつ,belok kiri;左利き,ひだりきき,kidal;左上,ひだりうえ,kiri atas
右|5|kanan|みぎ|ウ,ユウ|Posisi dan Arah|口|右手,みぎて,tangan kanan;右側,みぎがわ,sisi kanan;左右,さゆう,kiri dan kanan;右折,うせつ,belok kanan;右上,みぎうえ,kanan atas;右利き,みぎきき,dominan tangan kanan
高|10|tinggi, mahal|たかい|コウ|Ukuran dan Sifat|高|高校,こうこう,SMA;高校生,こうこうせい,siswa SMA;高い,たかい,tinggi atau mahal;高級,こうきゅう,kelas atas;最高,さいこう,tertinggi;高山,こうざん,gunung tinggi
安|6|murah, aman, tenang|やすい|アン|Sifat dan Keadaan|宀|安い,やすい,murah;安心,あんしん,tenang;安全,あんぜん,aman;不安,ふあん,cemas;安定,あんてい,stabil;安売り,やすうり,diskon
新|13|baru|あたらしい,あらた,にい|シン|Waktu dan Sifat|斤|新しい,あたらしい,baru;新聞,しんぶん,koran;新年,しんねん,tahun baru;新幹線,しんかんせん,kereta cepat;新入生,しんにゅうせい,siswa baru;新商品,しんしょうひん,produk baru
古|5|lama, kuno|ふるい,ふるす|コ|Waktu dan Sifat|口|古い,ふるい,lama;中古,ちゅうこ,barang bekas;古本,ふるほん,buku bekas;古代,こだい,zaman kuno;古着,ふるぎ,pakaian bekas;最古,さいこ,paling tua
長|8|panjang, ketua|ながい|チョウ|Ukuran dan Jabatan|長|長い,ながい,panjang;社長,しゃちょう,direktur perusahaan;校長,こうちょう,kepala sekolah;長所,ちょうしょ,kelebihan;長男,ちょうなん,anak laki-laki tertua;成長,せいちょう,pertumbuhan
多|6|banyak|おおい|タ|Jumlah dan Ukuran|夕|多い,おおい,banyak;多分,たぶん,mungkin;多数,たすう,jumlah besar;多文化,たぶんか,multikultural;多忙,たぼう,sangat sibuk;多目的,たもくてき,multifungsi
少|4|sedikit|すくない,すこし|ショウ|Jumlah dan Ukuran|小|少ない,すくない,sedikit;少し,すこし,sedikit;少年,しょうねん,anak laki-laki;少女,しょうじょ,anak perempuan;減少,げんしょう,penurunan;少々,しょうしょう,sebentar atau sedikit
子|3|anak|こ|シ,ス|Keluarga dan Manusia|子|子供,こども,anak-anak;女子,じょし,perempuan;男子,だんし,laki-laki;息子,むすこ,anak laki-laki;電子,でんし,elektron;帽子,ぼうし,topi
女|3|perempuan|おんな,め|ジョ,ニョ,ニョウ|Keluarga dan Manusia|女|女性,じょせい,perempuan;女子,じょし,anak perempuan;女の子,おんなのこ,anak perempuan;彼女,かのじょ,dia perempuan atau pacar;女王,じょおう,ratu;少女,しょうじょ,gadis
男|7|laki-laki|おとこ|ダン,ナン|Keluarga dan Manusia|田|男性,だんせい,laki-laki;男子,だんし,anak laki-laki;男の子,おとこのこ,anak laki-laki;長男,ちょうなん,anak laki-laki tertua;次男,じなん,anak laki-laki kedua;男友達,おとこともだち,teman laki-laki
父|4|ayah|ちち,とう|フ|Keluarga dan Manusia|父|父,ちち,ayah sendiri;お父さん,おとうさん,ayah;父親,ちちおや,orang tua laki-laki;父母,ふぼ,ayah dan ibu;祖父,そふ,kakek;父の日,ちちのひ,hari ayah
母|5|ibu|はは,かあ|ボ|Keluarga dan Manusia|母|母,はは,ibu sendiri;お母さん,おかあさん,ibu;母親,ははおや,orang tua perempuan;母国,ぼこく,tanah air;祖母,そぼ,nenek;母の日,ははのひ,hari ibu
友|4|teman|とも|ユウ|Manusia dan Hubungan Sosial|又|友達,ともだち,teman;友人,ゆうじん,kawan;親友,しんゆう,sahabat;友情,ゆうじょう,persahabatan;友好,ゆうこう,hubungan persahabatan;友達同士,ともだちどうし,antarteman
今|4|sekarang|いま|コン,キン|Waktu dan Kalender|人|今,いま,sekarang;今日,きょう,hari ini;今年,ことし,tahun ini;今月,こんげつ,bulan ini;今週,こんしゅう,minggu ini;今夜,こんや,malam ini
毎|6|setiap|ごと|マイ|Waktu dan Frekuensi|毋|毎日,まいにち,setiap hari;毎週,まいしゅう,setiap minggu;毎月,まいつき,setiap bulan;毎年,まいとし,setiap tahun;毎朝,まいあさ,setiap pagi;毎晩,まいばん,setiap malam
前|9|depan, sebelum|まえ|ゼン|Waktu dan Posisi|刂|前,まえ,depan atau sebelum;午前,ごぜん,pagi atau sebelum tengah hari;前日,ぜんじつ,hari sebelumnya;名前,なまえ,nama;以前,いぜん,sebelumnya;前半,ぜんはん,separuh pertama
後|9|belakang, sesudah|あと,うしろ,のち|ゴ,コウ|Waktu dan Posisi|彳|後ろ,うしろ,belakang;午後,ごご,sore atau setelah tengah hari;最後,さいご,terakhir;後日,ごじつ,hari kemudian;以後,いご,setelah ini;後半,こうはん,separuh kedua
午|4|tengah hari| - |ゴ|Waktu dan Kalender|十|午前,ごぜん,pagi;午後,ごご,sore;正午,しょうご,tengah hari tepat;午前中,ごぜんちゅう,sepanjang pagi;午後三時,ごごさんじ,pukul tiga sore;午年,うまどし,tahun kuda dalam zodiak
半|5|setengah|なかば|ハン|Jumlah dan Waktu|十|半分,はんぶん,setengah;半年,はんとし,enam bulan;半日,はんにち,setengah hari;三時半,さんじはん,pukul setengah empat;半額,はんがく,setengah harga;大半,たいはん,sebagian besar
間|12|jarak, waktu, antara|あいだ,ま|カン,ケン|Waktu dan Posisi|門|時間,じかん,waktu;間,あいだ,antara;人間,にんげん,manusia;間に合う,まにあう,tepat waktu;一週間,いっしゅうかん,satu minggu;間違い,まちがい,kesalahan
何|7|apa, berapa|なに,なん|カ|Kata Tanya dan Komunikasi|亻|何,なに,apa;何人,なんにん,berapa orang;何時,なんじ,pukul berapa;何曜日,なんようび,hari apa;何月,なんがつ,bulan apa;何歳,なんさい,umur berapa
気|6|perasaan, semangat, udara| - |キ,ケ|Perasaan dan Keadaan|气|元気,げんき,sehat atau bersemangat;天気,てんき,cuaca;人気,にんき,populer;気持ち,きもち,perasaan;病気,びょうき,sakit;気分,きぶん,suasana hati
天|4|langit, surga|あめ,あま|テン|Alam dan Cuaca|大|天気,てんき,cuaca;天国,てんごく,surga;天才,てんさい,jenius;天井,てんじょう,langit-langit;天使,てんし,malaikat;天文学,てんもんがく,astronomi
雨|8|hujan|あめ,あま|ウ|Alam dan Cuaca|雨|雨,あめ,hujan;大雨,おおあめ,hujan deras;雨天,うてん,cuaca hujan;雨具,あまぐ,perlengkapan hujan;梅雨,つゆ,musim hujan;雨宿り,あまやどり,berteduh dari hujan
電|13|listrik| - |デン|Teknologi dan Energi|雨|電気,でんき,listrik;電話,でんわ,telepon;電車,でんしゃ,kereta listrik;電池,でんち,baterai;電子,でんし,elektron;停電,ていでん,pemadaman listrik
車|7|mobil, kendaraan|くるま|シャ|Transportasi dan Kendaraan|車|車,くるま,mobil;電車,でんしゃ,kereta listrik;自動車,じどうしゃ,mobil;自転車,じてんしゃ,sepeda;駐車場,ちゅうしゃじょう,tempat parkir;車内,しゃない,di dalam kendaraan
駅|14|stasiun| - |エキ|Transportasi dan Tempat|馬|駅,えき,stasiun;駅前,えきまえ,depan stasiun;駅員,えきいん,petugas stasiun;駅長,えきちょう,kepala stasiun;駅弁,えきべん,bekal makanan stasiun;東京駅,とうきょうえき,Stasiun Tokyo
道|12|jalan, cara|みち|ドウ,トウ|Transportasi dan Arah|辶|道,みち,jalan;道路,どうろ,jalan raya;歩道,ほどう,trotoar;柔道,じゅうどう,judo;書道,しょどう,kaligrafi Jepang;近道,ちかみち,jalan pintas
国|8|negara|くに|コク|Negara dan Masyarakat|囗|国,くに,negara;外国,がいこく,luar negeri;外国人,がいこくじん,orang asing;中国,ちゅうごく,Tiongkok;国語,こくご,bahasa nasional;国際,こくさい,internasional
語|14|bahasa, kata|かたる|ゴ|Bahasa dan Komunikasi|言|日本語,にほんご,bahasa Jepang;英語,えいご,bahasa Inggris;外国語,がいこくご,bahasa asing;国語,こくご,bahasa nasional;単語,たんご,kosakata;敬語,けいご,bahasa hormat
書|10|menulis, buku|かく|ショ|Pendidikan dan Komunikasi|曰|書く,かく,menulis;図書館,としょかん,perpustakaan;辞書,じしょ,kamus;読書,どくしょ,membaca buku;教科書,きょうかしょ,buku pelajaran;書類,しょるい,dokumen
読|14|membaca|よむ|ドク,トク,トウ|Pendidikan dan Komunikasi|言|読む,よむ,membaca;読書,どくしょ,membaca buku;読者,どくしゃ,pembaca;音読,おんどく,membaca nyaring;読解,どっかい,pemahaman bacaan;読み方,よみかた,cara membaca
見|7|melihat|みる,みえる,みせる|ケン|Pancaindra dan Aktivitas|見|見る,みる,melihat;見学,けんがく,kunjungan belajar;意見,いけん,pendapat;見物,けんぶつ,menonton atau melihat-lihat;花見,はなみ,melihat bunga sakura;発見,はっけん,penemuan
聞|14|mendengar, bertanya|きく,きこえる|ブン,モン|Pancaindra dan Komunikasi|耳|聞く,きく,mendengar;新聞,しんぶん,koran;聞こえる,きこえる,terdengar;聞き手,ききて,pendengar;聞き取り,ききとり,menyimak;新聞社,しんぶんしゃ,perusahaan surat kabar
話|13|berbicara, cerita|はなす,はなし|ワ|Bahasa dan Komunikasi|言|話す,はなす,berbicara;会話,かいわ,percakapan;電話,でんわ,telepon;話題,わだい,topik pembicaraan;昔話,むかしばなし,cerita zaman dahulu;世話,せわ,perhatian atau bantuan
言|7|berkata, mengatakan|いう,こと|ゲン,ゴン|Bahasa dan Komunikasi|言|言う,いう,mengatakan;言葉,ことば,kata atau bahasa;言語,げんご,bahasa;発言,はつげん,pernyataan;伝言,でんごん,pesan titipan;方言,ほうげん,dialek
食|9|makan, makanan|たべる,くう|ショク,ジキ|Makanan dan Aktivitas|食|食べる,たべる,makan;食事,しょくじ,waktu makan;食堂,しょくどう,kantin;食品,しょくひん,bahan makanan;食文化,しょくぶんか,budaya makan;朝食,ちょうしょく,sarapan
飲|12|minum|のむ|イン|Makanan dan Aktivitas|食|飲む,のむ,minum;飲食,いんしょく,makan dan minum;飲料,いんりょう,minuman;飲み物,のみもの,minuman;飲酒,いんしゅ,minum alkohol;飲み水,のみみず,air minum
行|6|pergi, melakukan|いく,ゆく,おこなう|コウ,ギョウ,アン|Pergerakan dan Aktivitas|行|行く,いく,pergi;旅行,りょこう,perjalanan;銀行,ぎんこう,bank;行動,こうどう,tindakan;行事,ぎょうじ,acara;行列,ぎょうれつ,barisan
来|7|datang|くる,きたる,きたす|ライ|Pergerakan dan Waktu|人|来る,くる,datang;来年,らいねん,tahun depan;来週,らいしゅう,minggu depan;来月,らいげつ,bulan depan;未来,みらい,masa depan;出来る,できる,bisa atau dapat
出|5|keluar, muncul|でる,だす|シュツ,スイ|Pergerakan dan Posisi|凵|出る,でる,keluar;出口,でぐち,pintu keluar;出発,しゅっぱつ,keberangkatan;外出,がいしゅつ,pergi keluar;提出,ていしゅつ,penyerahan;出席,しゅっせき,kehadiran
入|2|masuk|いる,はいる,いれる|ニュウ|Pergerakan dan Posisi|入|入る,はいる,masuk;入口,いりぐち,pintu masuk;入学,にゅうがく,masuk sekolah;入院,にゅういん,rawat inap;収入,しゅうにゅう,pemasukan;入場,にゅうじょう,masuk tempat acara
立|5|berdiri|たつ,たてる|リツ,リュウ|Aktivitas dan Posisi|立|立つ,たつ,berdiri;立場,たちば,posisi atau sudut pandang;国立,こくりつ,negeri;私立,しりつ,swasta;独立,どくりつ,kemerdekaan;立派,りっぱ,megah atau hebat
休|6|istirahat, libur|やすむ,やすまる,やすめる|キュウ|Aktivitas dan Waktu|亻|休む,やすむ,beristirahat;休み,やすみ,libur;休日,きゅうじつ,hari libur;休憩,きゅうけい,istirahat;夏休み,なつやすみ,liburan musim panas;定休日,ていきゅうび,hari libur tetap
白|5|putih|しろ,しら,しろい|ハク,ビャク|Warna dan Sifat|白|白い,しろい,putih;白紙,はくし,kertas kosong;白黒,しろくろ,hitam putih;白鳥,はくちょう,angsa;面白い,おもしろい,menarik;白米,はくまい,beras putih
名|6|nama, terkenal|な|メイ,ミョウ|Identitas dan Masyarakat|口|名前,なまえ,nama;有名,ゆうめい,terkenal;名刺,めいし,kartu nama;名字,みょうじ,nama keluarga;名所,めいしょ,tempat terkenal;氏名,しめい,nama lengkap
外|5|luar|そと,ほか,はずす,はずれる|ガイ,ゲ|Posisi dan Arah|夕|外国,がいこく,luar negeri;外国人,がいこくじん,orang asing;外出,がいしゅつ,pergi keluar;海外,かいがい,luar negeri;外側,そとがわ,sisi luar;以外,いがい,kecuali
口|3|mulut, pintu masuk|くち|コウ,ク|Tubuh dan Bagian Tubuh|口|口,くち,mulut;入口,いりぐち,pintu masuk;出口,でぐち,pintu keluar;人口,じんこう,jumlah penduduk;口調,くちょう,nada bicara;悪口,わるぐち,perkataan buruk
目|5|mata|め,ま|モク,ボク|Tubuh dan Pancaindra|目|目,め,mata;目的,もくてき,tujuan;目標,もくひょう,target;注目,ちゅうもく,perhatian;一日目,いちにちめ,hari pertama;目上,めうえ,orang yang lebih senior
耳|6|telinga|みみ|ジ|Tubuh dan Pancaindra|耳|耳,みみ,telinga;耳鼻科,じびか,klinik THT;耳元,みみもと,dekat telinga;耳鳴り,みみなり,telinga berdenging;中耳,ちゅうじ,telinga tengah;耳栓,みみせん,penyumbat telinga
手|4|tangan|て,た|シュ|Tubuh dan Aktivitas|手|手,て,tangan;上手,じょうず,pandai;下手,へた,tidak mahir;手紙,てがみ,surat;選手,せんしゅ,atlet;手伝う,てつだう,membantu
足|7|kaki, cukup|あし,たりる,たす|ソク|Tubuh dan Aktivitas|足|足,あし,kaki;足りる,たりる,cukup;足す,たす,menambahkan;不足,ふそく,kekurangan;遠足,えんそく,rekreasi sekolah;足音,あしおと,suara langkah kaki
花|7|bunga|はな|カ,ケ|Alam dan Tumbuhan|艹|花,はな,bunga;花火,はなび,kembang api;花見,はなみ,melihat bunga sakura;花屋,はなや,toko bunga;花束,はなたば,buket bunga;花粉,かふん,serbuk sari
川|3|sungai|かわ|セン|Alam dan Geografi|川|川,かわ,sungai;小川,おがわ,sungai kecil;河川,かせん,sungai-sungai;川岸,かわぎし,tepi sungai;川口,かわぐち,mulut sungai;川遊び,かわあそび,bermain di sungai
北|5|utara|きた|ホク|Arah dan Geografi|匕|北,きた,utara;北口,きたぐち,pintu utara;北風,きたかぜ,angin utara;北海道,ほっかいどう,Hokkaido;北極,ほっきょく,Kutub Utara;東北,とうほく,wilayah timur laut Jepang
南|9|selatan|みなみ|ナン,ナ|Arah dan Geografi|十|南,みなみ,selatan;南口,みなみぐち,pintu selatan;南国,なんごく,negara atau daerah selatan;南米,なんべい,Amerika Selatan;東南,とうなん,tenggara;南北,なんぼく,utara dan selatan
東|8|timur|ひがし|トウ|Arah dan Geografi|木|東,ひがし,timur;東京,とうきょう,Tokyo;東口,ひがしぐち,pintu timur;東北,とうほく,wilayah timur laut Jepang;関東,かんとう,wilayah Kanto;東西,とうざい,timur dan barat
西|6|barat|にし|セイ,サイ|Arah dan Geografi|襾|西,にし,barat;西口,にしぐち,pintu barat;西洋,せいよう,dunia Barat;関西,かんさい,wilayah Kansai;東西,とうざい,timur dan barat;西日本,にしにほん,Jepang bagian barat
#N4
会|6|bertemu, pertemuan|あう|カイ,エ|Hubungan Sosial dan Kegiatan|人|会う,あう,bertemu;会社,かいしゃ,perusahaan;会話,かいわ,percakapan;会議,かいぎ,rapat;社会,しゃかい,masyarakat;大会,たいかい,kompetisi atau pertemuan besar
同|6|sama|おなじ|ドウ|Persamaan dan Hubungan|口|同じ,おなじ,sama;同時,どうじ,pada waktu yang sama;同僚,どうりょう,rekan kerja;同級生,どうきゅうせい,teman sekelas;共同,きょうどう,bersama;同意,どうい,persetujuan
事|8|hal, urusan, kejadian|こと|ジ,ズ|Kehidupan dan Aktivitas|亅|仕事,しごと,pekerjaan;食事,しょくじ,waktu makan;大事,だいじ,penting;事故,じこ,kecelakaan;用事,ようじ,keperluan;返事,へんじ,jawaban
自|6|diri sendiri|みずから|ジ,シ|Identitas dan Kehidupan|自|自分,じぶん,diri sendiri;自動車,じどうしゃ,mobil;自転車,じてんしゃ,sepeda;自由,じゆう,kebebasan;自信,じしん,percaya diri;自然,しぜん,alam
社|7|perusahaan, kuil Shinto|やしろ|シャ|Pekerjaan dan Masyarakat|示|会社,かいしゃ,perusahaan;社会,しゃかい,masyarakat;社員,しゃいん,karyawan;社長,しゃちょう,direktur perusahaan;神社,じんじゃ,kuil Shinto;入社,にゅうしゃ,masuk perusahaan
発|9|berangkat, memancarkan, memulai|たつ|ハツ,ホツ|Pergerakan dan Aktivitas|癶|出発,しゅっぱつ,keberangkatan;発表,はっぴょう,presentasi atau pengumuman;発音,はつおん,pelafalan;発見,はっけん,penemuan;発車,はっしゃ,kereta mulai berangkat;発明,はつめい,penemuan atau invensi
者|8|orang, pelaku|もの|シャ|Manusia dan Profesi|耂|医者,いしゃ,dokter;学者,がくしゃ,ilmuwan;読者,どくしゃ,pembaca;若者,わかもの,anak muda;作者,さくしゃ,pengarang;関係者,かんけいしゃ,pihak terkait
地|6|tanah, bumi| - |チ,ジ|Alam dan Geografi|土|地図,ちず,peta;地下,ちか,bawah tanah;地震,じしん,gempa bumi;土地,とち,tanah atau lahan;地理,ちり,geografi;地球,ちきゅう,planet Bumi
業|13|pekerjaan/bisnis|わざ|ギョウ、ゴウ|Kata kerja|亅|事業,じぎょう,pekerjaan;卒業,そつぎょう,lulus;産業,さんぎょう,industri
方|4|arah,cara|かた|ホウ|Arah dan Posisi|方|方法,ほうほう,cara;方向,ほうこう,arah;地方,ちほう,daerah;方言,ほうげん,dialek;夕方,ゆうがた,sore;味方,みかた,pihak kawan
新|13|baru|あたらしい,あらた,にい|シン|Sifat dan Keadaan|斤|新年,しんねん,tahun baru;新聞,しんぶん,koran;新幹線,しんかんせん,kereta cepat;新入生,しんにゅうせい,siswa baru;新鮮,しんせん,segar;新商品,しんしょうひん,produk baru
場|12|tempat|ば|ジョウ|Tempat dan Lokasi|土|場所,ばしょ,tempat;工場,こうじょう,pabrik;会場,かいじょう,tempat acara;市場,いちば,pasar;駐車場,ちゅうしゃじょう,tempat parkir;広場,ひろば,lapangan
員|10|anggota| - |イン|Pekerjaan dan Organisasi|口|会社員,かいしゃいん,karyawan perusahaan;店員,てんいん,pegawai toko;銀行員,ぎんこういん,pegawai bank;会員,かいいん,anggota;駅員,えきいん,petugas stasiun;定員,ていいん,kapasitas anggota
立|5|berdiri|たつ,たてる|リツ,リュウ|Gerakan dan Posisi|立|立場,たちば,posisi;独立,どくりつ,kemerdekaan;国立,こくりつ,nasional;私立,しりつ,swasta;成立,せいりつ,terbentuk;設立,せつりつ,pendirian
開|12|membuka|ひらく,ひらける,あく,あける|カイ|Aktivitas|門|開始,かいし,permulaan;開店,かいてん,pembukaan toko;公開,こうかい,publikasi;開発,かいはつ,pengembangan;開会,かいかい,pembukaan acara;開放,かいほう,pembukaan
手|4|tangan|て,た|シュ|Tubuh dan Anggota Badan|手|手紙,てがみ,surat;手術,しゅじゅつ,operasi;選手,せんしゅ,atlet;上手,じょうず,pandai;下手,へた,tidak pandai;握手,あくしゅ,berjabat tangan
力|2|kekuatan|ちから|リョク,リキ|Kemampuan dan Kekuatan|力|努力,どりょく,usaha;能力,のうりょく,kemampuan;協力,きょうりょく,kerja sama;体力,たいりょく,kekuatan fisik;実力,じつりょく,kemampuan nyata;強力,きょうりょく,kuat
問|11|bertanya,masalah|とう,とい|モン|Komunikasi dan Pendidikan|口|質問,しつもん,pertanyaan;問題,もんだい,masalah;訪問,ほうもん,kunjungan;問い合わせ,といあわせ,pertanyaan/informasi;学問,がくもん,ilmu pengetahuan;問答,もんどう,tanya jawab
代|5|generasi,pengganti|かわる,かえる,よ,しろ|ダイ,タイ|Waktu dan Kehidupan|人|時代,じだい,zaman;代表,だいひょう,perwakilan;代金,だいきん,harga;交代,こうたい,pergantian;現代,げんだい,masa kini;世代,せだい,generasi
明|8|terang,jelas|あかるい,あかり,あける,あきらか|メイ,ミョウ|Sifat dan Keadaan|日|説明,せつめい,penjelasan;明日,あした,besok;明確,めいかく,jelas;文明,ぶんめい,peradaban;証明,しょうめい,bukti;明白,めいはく,jelas
動|11|bergerak|うごく,うごかす|ドウ|Gerakan dan Aktivitas|力|運動,うんどう,olahraga;動物,どうぶつ,hewan;活動,かつどう,aktivitas;自動車,じどうしゃ,mobil;感動,かんどう,terharu;移動,いどう,perpindahan
京|8|ibu kota| - |キョウ,ケイ,キン|Kota dan Geografi|亠|東京,とうきょう,Tokyo;京都,きょうと,Kyoto;京阪,けいはん,Kyoto-Osaka;上京,じょうきょう,pergi ke Tokyo;京風,きょうふう,gaya Kyoto
目|5|mata|め,ま|モク,ボク|Tubuh dan Penglihatan|目|目的,もくてき,tujuan;目標,もくひょう,target;注目,ちゅうもく,perhatian;目次,もくじ,daftar isi;目覚まし,めざまし,alarm;一目,ひとめ,sekilas pandang
通|10|melewati,lancar|とおる,とおす,かよう|ツウ,ツ|Gerakan dan Transportasi|辶|交通,こうつう,lalu lintas;通学,つうがく,pergi sekolah;通勤,つうきん,pergi bekerja;通訳,つうやく,penerjemah lisan;普通,ふつう,biasa;通行,つうこう,lalu lintas
言|7|berkata|いう,こと|ゲン,ゴン|Bahasa dan Komunikasi|言|言語,げんご,bahasa;発言,はつげん,pernyataan;伝言,でんごん,pesan;言葉,ことば,kata-kata;宣言,せんげん,deklarasi;方言,ほうげん,dialek
理|11|alasan,logika|ことわり|リ|Ilmu dan Pemikiran|王|理由,りゆう,alasan;理解,りかい,pemahaman;料理,りょうり,masakan;心理,しんり,psikologi;理想,りそう,ideal;管理,かんり,pengelolaan
体|7|tubuh|からだ|タイ,テイ|Tubuh dan Kesehatan|人|体育,たいいく,pendidikan jasmani;体力,たいりょく,kekuatan fisik;体験,たいけん,pengalaman;全体,ぜんたい,keseluruhan;具体的,ぐたいてき,konkret;体温,たいおん,suhu tubuh
田|5|sawah|た|デン|Pertanian dan Alam|田|田んぼ,たんぼ,sawah;田舎,いなか,pedesaan;田園,でんえん,pemandangan persawahan;水田,すいでん,sawah berair;田植え,たうえ,penanaman padi
主|5|utama,pemilik|ぬし,おも,あるじ|シュ,ス|Kehidupan dan Kedudukan|丶|主人,しゅじん,suami/tuan rumah;主役,しゅやく,pemeran utama;主義,しゅぎ,prinsip;主語,しゅご,subjek;民主,みんしゅ,demokrasi;主食,しゅしょく,makanan pokok
題|18|judul,topik| - |ダイ|Pendidikan dan Komunikasi|頁|問題,もんだい,masalah;題名,だいめい,judul;宿題,しゅくだい,pekerjaan rumah;話題,わだい,topik pembicaraan;課題,かだい,tugas;出題,しゅつだい,pemberian soal
意|13|pikiran,maksud|こころ|イ|Pikiran dan Perasaan|心|意味,いみ,arti;意見,いけん,pendapat;注意,ちゅうい,perhatian;意識,いしき,kesadaran;用意,ようい,persiapan;決意,けつい,tekad
不|4|tidak,bukan| - |フ,ブ|Sifat dan Keadaan|一|不安,ふあん,cemas;不便,ふべん,tidak praktis;不可能,ふかのう,tidak mungkin;不合格,ふごうかく,tidak lulus;不足,ふそく,kekurangan;不自由,ふじゆう,tidak bebas
作|7|membuat,karya|つくる|サク,サ|Aktivitas dan Pekerjaan|人|作品,さくひん,karya;作文,さくぶん,karangan;作家,さっか,penulis;作業,さぎょう,pekerjaan;作成,さくせい,pembuatan;動作,どうさ,gerakan
用|5|menggunakan,keperluan|もちいる|ヨウ|Aktivitas dan Kegunaan|用|利用,りよう,pemanfaatan;使用,しよう,penggunaan;用事,ようじ,keperluan;費用,ひよう,biaya;用意,ようい,persiapan;作用,さよう,pengaruh
度|9|tingkat,kali|たび|ド,ト,タク|Ukuran dan Waktu|广|温度,おんど,suhu;程度,ていど,tingkat;今度,こんど,kali ini;何度,なんど,berapa kali;速度,そくど,kecepatan;制度,せいど,sistem
強|11|kuat|つよい,つよまる,つよめる|キョウ,ゴウ|Sifat dan Kekuatan|弓|強力,きょうりょく,kuat;勉強,べんきょう,belajar;強調,きょうちょう,penekanan;強制,きょうせい,paksaan;強風,きょうふう,angin kencang;最強,さいきょう,paling kuat
公|4|umum,publik|おおやけ|コウ,ク|Masyarakat dan Pemerintahan|八|公園,こうえん,taman umum;公共,こうきょう,publik;公立,こうりつ,negeri;公平,こうへい,adil;公務員,こうむいん,pegawai negeri;公開,こうかい,publikasi
持|9|memegang,membawa|もつ|ジ|Aktivitas dan Kepemilikan|手|持物,もちもの,barang bawaan;気持ち,きもち,perasaan;支持,しじ,dukungan;持続,じぞく,keberlanjutan;所持,しょじ,kepemilikan;持参,じさん,membawa
野|11|lapangan,liar|の|ヤ|Alam dan Geografi|里|野菜,やさい,sayuran;野球,やきゅう,bisbol;野外,やがい,luar ruangan;野原,のはら,padang rumput;分野,ぶんや,bidang;野生,やせい,liar
以|5|sejak,dengan|もって|イ|Waktu dan Perbandingan|人|以上,いじょう,lebih dari;以下,いか,kurang dari;以外,いがい,selain;以内,いない,dalam batas;以後,いご,setelah;以前,いぜん,sebelumnya
思|9|berpikir|おもう|シ|Pikiran dan Perasaan|心|思考,しこう,pemikiran;思想,しそう,ideologi;意思,いし,kehendak;思い出,おもいで,kenangan;不思議,ふしぎ,aneh;思春期,ししゅんき,masa pubertas
家|10|rumah,keluarga|いえ,や|カ,ケ|Keluarga dan Tempat Tinggal|宀|家族,かぞく,keluarga;家庭,かてい,rumah tangga;作家,さっか,penulis;家事,かじ,pekerjaan rumah;国家,こっか,negara;家賃,やちん,uang sewa rumah
世|5|dunia,generasi|よ|セイ,セ|Masyarakat dan Waktu|一|世界,せかい,dunia;世代,せだい,generasi;世間,せけん,masyarakat;世話,せわ,perawatan;世紀,せいき,abad;中世,ちゅうせい,abad pertengahan
多|6|banyak|おおい|タ|Jumlah dan Kuantitas|夕|多数,たすう,jumlah besar;多分,たぶん,mungkin;多様,たよう,beragam;多忙,たぼう,sangat sibuk;多少,たしょう,sedikit banyak;多文化,たぶんか,multibudaya
正|5|benar|ただしい,ただす,まさ|セイ,ショウ|Sifat dan Kebenaran|止|正解,せいかい,jawaban benar;正確,せいかく,akurat;正月,しょうがつ,tahun baru;正直,しょうじき,jujur;訂正,ていせい,koreksi;正式,せいしき,resmi
安|6|murah,aman|やすい|アン|Keadaan dan Keamanan|宀|安全,あんぜん,aman;安心,あんしん,tenang;安定,あんてい,stabil;不安,ふあん,cemas;安価,あんか,murah;安静,あんせい,istirahat dengan tenang
院|10|institusi,gedung| - |イン|Tempat dan Organisasi|阝|病院,びょういん,rumah sakit;大学院,だいがくいん,pascasarjana;入院,にゅういん,rawat inap;退院,たいいん,keluar rumah sakit;院長,いんちょう,kepala institusi;寺院,じいん,biara
心|4|hati,pikiran|こころ|シン|Pikiran dan Perasaan|心|安心,あんしん,ketenangan;心配,しんぱい,khawatir;中心,ちゅうしん,pusat;心理,しんり,psikologi;関心,かんしん,minat;決心,けっしん,tekad
界|9|dunia,bidang| - |カイ|Masyarakat dan Dunia|田|世界,せかい,dunia;社会,しゃかい,masyarakat;業界,ぎょうかい,industri;限界,げんかい,batas;学界,がっかい,dunia akademik;政界,せいかい,dunia politik
教|11|mengajar|おしえる,おそわる|キョウ|Pendidikan|攵|教育,きょういく,pendidikan;教室,きょうしつ,ruang kelas;教師,きょうし,guru;教科書,きょうかしょ,buku pelajaran;教会,きょうかい,gereja;教員,きょういん,tenaga pengajar
文|4|kalimat,tulisan|ふみ|ブン,モン|Bahasa dan Pendidikan|文|文化,ぶんか,budaya;文学,ぶんがく,sastra;文章,ぶんしょう,karangan;作文,さくぶん,komposisi;文法,ぶんぽう,tata bahasa;文字,もじ,huruf
元|4|asal,awal|もと|ゲン,ガン|Waktu dan Asal|儿|元気,げんき,sehat;元日,がんじつ,hari pertama tahun baru;元々,もともと,asalnya;地元,じもと,daerah asal;元号,げんごう,nama era;紀元,きげん,era
重|9|berat,penting|おもい,かさねる,かさなる|ジュウ,チョウ|Ukuran dan Keadaan|里|重要,じゅうよう,penting;体重,たいじゅう,berat badan;重力,じゅうりょく,gravitasi;慎重,しんちょう,hati-hati;重視,じゅうし,penekanan;二重,にじゅう,ganda
近|7|dekat|ちかい|キン,コン|Jarak dan Posisi|辶|近所,きんじょ,tetangga;最近,さいきん,akhir-akhir ini;近代,きんだい,zaman modern;近道,ちかみち,jalan pintas;接近,せっきん,mendekat;近況,きんきょう,kondisi terkini
考|6|berpikir|かんがえる|コウ|Pikiran dan Aktivitas|耂|考える,かんがえる,berpikir;参考,さんこう,referensi;考察,こうさつ,pertimbangan;思考,しこう,pemikiran;考古学,こうこがく,arkeologi;選考,せんこう,seleksi
画|8|gambar,rencana|えがく,かく|ガ,カク|Seni dan Perencanaan|田|映画,えいが,film;計画,けいかく,rencana;画家,がか,pelukis;漫画,まんが,komik;画面,がめん,layar;企画,きかく,perencanaan
海|9|laut|うみ|カイ|Alam dan Geografi|氵|海外,かいがい,luar negeri;海岸,かいがん,pantai;海水,かいすい,air laut;海洋,かいよう,samudra;北海道,ほっかいどう,Hokkaido;海底,かいてい,dasar laut
売|7|menjual|うる,うれる|バイ|Perdagangan dan Ekonomi|士|売店,ばいてん,kios;販売,はんばい,penjualan;売買,ばいばい,jual beli;売上,うりあげ,hasil penjualan;発売,はつばい,peluncuran produk;商売,しょうばい,perdagangan
知|8|mengetahui|しる,しらせる|チ|Pengetahuan dan Informasi|矢|知識,ちしき,pengetahuan;通知,つうち,pemberitahuan;知人,ちじん,kenalan;承知,しょうち,pemahaman;知事,ちじ,gubernur;未知,みち,belum diketahui
道|12|jalan,cara|みち|ドウ,トウ|Transportasi dan Kehidupan|辶|道路,どうろ,jalan raya;北海道,ほっかいどう,Hokkaido;書道,しょどう,kaligrafi;柔道,じゅうどう,judo;歩道,ほどう,trotoar;道具,どうぐ,peralatan
集|12|mengumpulkan|あつまる,あつめる,つどう|シュウ|Aktivitas dan Organisasi|隹|集合,しゅうごう,berkumpul;集団,しゅうだん,kelompok;集中,しゅうちゅう,konsentrasi;編集,へんしゅう,penyuntingan;募集,ぼしゅう,rekrutmen;収集,しゅうしゅう,pengumpulan
別|7|berbeda,pisah|わかれる,わける|ベツ|Hubungan dan Perbedaan|刂|別々,べつべつ,masing-masing;特別,とくべつ,khusus;区別,くべつ,pembedaan;別人,べつじん,orang berbeda;送別,そうべつ,perpisahan;別荘,べっそう,vila
物|8|benda,barang|もの|ブツ,モツ|Benda dan Kehidupan|牛|動物,どうぶつ,hewan;食物,しょくもつ,bahan makanan;荷物,にもつ,barang bawaan;買い物,かいもの,belanja;建物,たてもの,bangunan;物語,ものがたり,cerita
使|8|menggunakan|つかう,つかい|シ|Aktivitas dan Pekerjaan|人|使用,しよう,penggunaan;使者,ししゃ,utusan;大使,たいし,duta besar;使い方,つかいかた,cara penggunaan;天使,てんし,malaikat;使役,しえき,bentuk kausatif
品|9|barang,kualitas|しな|ヒン|Barang dan Perdagangan|口|商品,しょうひん,produk;食品,しょくひん,bahan makanan;作品,さくひん,karya;品質,ひんしつ,kualitas;部品,ぶひん,suku cadang;品物,しなもの,barang
計|9|menghitung,rencana|はかる|ケイ|Matematika dan Perencanaan|言|計画,けいかく,rencana;時計,とけい,jam;合計,ごうけい,total;計算,けいさん,perhitungan;設計,せっけい,desain;統計,とうけい,statistik
死|6|mati|しぬ|シ|Kehidupan dan Kematian|歹|死亡,しぼう,kematian;死者,ししゃ,orang meninggal;死体,したい,mayat;必死,ひっし,berjuang mati-matian;生死,せいし,hidup dan mati;死因,しいん,penyebab kematian
特|10|khusus| - |トク|Sifat dan Keadaan|牛|特別,とくべつ,khusus;特急,とっきゅう,kereta ekspres;特徴,とくちょう,ciri khas;特技,とくぎ,keahlian khusus;特典,とくてん,keistimewaan;独特,どくとく,unik
私|7|saya,pribadi|わたし,わたくし|シ|Manusia dan Kehidupan|禾|私立,しりつ,swasta;私生活,しせいかつ,kehidupan pribadi;私物,しぶつ,barang pribadi;私用,しよう,keperluan pribadi;私語,しご,percakapan pribadi;私有,しゆう,kepemilikan pribadi
始|8|memulai|はじまる,はじめる|シ|Waktu dan Aktivitas|女|開始,かいし,permulaan;始発,しはつ,kereta pertama;始業,しぎょう,awal jam kerja/sekolah;始終,しじゅう,selalu;年始,ねんし,awal tahun;始点,してん,titik awal
朝|12|pagi|あさ|チョウ|Waktu dan Kehidupan|月|朝食,ちょうしょく,sarapan;今朝,けさ,pagi ini;毎朝,まいあさ,setiap pagi;朝日,あさひ,matahari pagi;朝刊,ちょうかん,koran pagi;早朝,そうちょう,pagi-pagi
運|12|membawa,nasib|はこぶ|ウン|Gerakan dan Kehidupan|辶|運動,うんどう,olahraga;運転,うんてん,mengemudi;運命,うんめい,takdir;運送,うんそう,pengiriman;幸運,こううん,keberuntungan;運営,うんえい,pengelolaan
終|11|selesai,akhir|おわる,おえる|シュウ|Waktu dan Aktivitas|糸|終了,しゅうりょう,penyelesaian;最終,さいしゅう,terakhir;終電,しゅうでん,kereta terakhir;終日,しゅうじつ,sepanjang hari;終点,しゅうてん,stasiun akhir;終業,しゅうぎょう,akhir jam kerja
台|5|alas,mesin,platform|うてな|ダイ,タイ|Benda dan Ukuran|口|台所,だいどころ,dapur;台風,たいふう,topan;台車,だいしゃ,kereta dorong;一台,いちだい,satu unit mesin;台本,だいほん,naskah;舞台,ぶたい,panggung
広|5|luas|ひろい,ひろがる,ひろげる|コウ|Ukuran dan Tempat|广|広場,ひろば,lapangan;広告,こうこく,iklan;広大,こうだい,sangat luas;広島,ひろしま,Hiroshima;広報,こうほう,humas;広範囲,こうはんい,cakupan luas
住|7|tinggal|すむ,すまう,すまい|ジュウ|Tempat Tinggal|人|住所,じゅうしょ,alamat;住民,じゅうみん,penduduk;住宅,じゅうたく,perumahan;移住,いじゅう,imigrasi;居住,きょじゅう,tempat tinggal;住人,じゅうにん,penghuni
真|10|benar,asli|ま|シン|Sifat dan Keadaan|目|写真,しゃしん,foto;真実,しんじつ,kebenaran;真面目,まじめ,serius;真夜中,まよなか,tengah malam;真剣,しんけん,serius;真相,しんそう,fakta sebenarnya
有|6|ada,mempunyai|ある|ユウ,ウ|Keberadaan dan Kepemilikan|月|有名,ゆうめい,terkenal;有料,ゆうりょう,berbayar;有効,ゆうこう,efektif;所有,しょゆう,kepemilikan;有利,ゆうり,menguntungkan;有無,うむ,ada atau tidak
口|3|mulut|くち|コウ,ク|Tubuh dan Komunikasi|口|入口,いりぐち,pintu masuk;出口,でぐち,pintu keluar;人口,じんこう,jumlah penduduk;口調,くちょう,nada bicara;悪口,わるぐち,perkataan buruk;口座,こうざ,rekening
少|4|sedikit|すくない,すこし|ショウ|Jumlah dan Kuantitas|小|少数,しょうすう,jumlah kecil;少々,しょうしょう,sedikit;少年,しょうねん,anak laki-laki;少女,しょうじょ,anak perempuan;減少,げんしょう,penurunan;少量,しょうりょう,jumlah sedikit
町|7|kota,kawasan|まち|チョウ|Tempat dan Geografi|田|町内,ちょうない,dalam lingkungan kota;町長,ちょうちょう,kepala kota;下町,したまち,kawasan kota lama;町民,ちょうみん,warga kota;町並み,まちなみ,jajaran bangunan;町役場,まちやくば,kantor pemerintahan kota
料|10|bahan,biaya| - |リョウ|Ekonomi dan Kehidupan|斗|料理,りょうり,masakan;料金,りょうきん,biaya;材料,ざいりょう,bahan;無料,むりょう,gratis;有料,ゆうりょう,berbayar;授業料,じゅぎょうりょう,biaya kuliah
工|3|pekerjaan,teknik| - |コウ,ク|Pekerjaan dan Industri|工|工場,こうじょう,pabrik;工事,こうじ,konstruksi;工業,こうぎょう,industri;工学,こうがく,teknik;人工,じんこう,buatan manusia;加工,かこう,pengolahan
建|9|membangun|たてる,たつ|ケン,コン|Bangunan dan Konstruksi|廴|建物,たてもの,bangunan;建設,けんせつ,konstruksi;建築,けんちく,arsitektur;建国,けんこく,pendirian negara;建前,たてまえ,prinsip/pendirian;再建,さいけん,pembangunan kembali
空|8|langit,kosong|そら,あく,あける,から|クウ|Alam dan Keadaan|穴|空気,くうき,udara;空港,くうこう,bandara;空間,くうかん,ruang;青空,あおぞら,langit biru;空席,くうせき,tempat duduk kosong;航空,こうくう,penerbangan
急|9|cepat,mendesak|いそぐ|キュウ|Waktu dan Kecepatan|心|急行,きゅうこう,kereta ekspres;急用,きゅうよう,keperluan mendesak;急病,きゅうびょう,sakit mendadak;急速,きゅうそく,cepat;緊急,きんきゅう,darurat;急増,きゅうぞう,peningkatan drastis
止|4|berhenti|とまる,とめる,やむ,やめる|シ|Gerakan dan Aktivitas|止|停止,ていし,penghentian;中止,ちゅうし,pembatalan;禁止,きんし,larangan;止血,しけつ,menghentikan perdarahan;防止,ぼうし,pencegahan;休止,きゅうし,jeda
送|9|mengirim,mengantar|おくる|ソウ|Transportasi dan Aktivitas|辶|送信,そうしん,mengirim pesan;送料,そうりょう,ongkos kirim;放送,ほうそう,siaran;送別,そうべつ,perpisahan;輸送,ゆそう,transportasi;送金,そうきん,pengiriman uang
切|4|memotong|きる,きれる|セツ,サイ|Aktivitas dan Benda|刀|大切,たいせつ,penting;切手,きって,perangko;親切,しんせつ,baik hati;切断,せつだん,pemotongan;売切れ,うりきれ,habis terjual;締切,しめきり,batas waktu
転|11|berputar,berpindah|ころぶ,ころがる,ころがす|テン|Gerakan dan Transportasi|車|運転,うんてん,mengemudi;自転車,じてんしゃ,sepeda;転校,てんこう,pindah sekolah;転職,てんしょく,ganti pekerjaan;移転,いてん,pemindahan;転倒,てんとう,jatuh terguling
研|9|mengasah,meneliti|とぐ|ケン|Pendidikan dan Penelitian|石|研究,けんきゅう,penelitian;研究者,けんきゅうしゃ,peneliti;研究室,けんきゅうしつ,laboratorium;研修,けんしゅう,pelatihan;研磨,けんま,pengasahan;研修生,けんしゅうせい,peserta pelatihan
足|7|kaki,cukup|あし,たりる,たす|ソク|Tubuh dan Gerakan|足|足音,あしおと,suara langkah kaki;足首,あしくび,pergelangan kaki;足元,あしもと,kaki/tempat berpijak;不足,ふそく,kekurangan;満足,まんぞく,kepuasan;遠足,えんそく,karyawisata
究|7|meneliti,mendalami|きわめる|キュウ|Pendidikan dan Penelitian|穴|研究,けんきゅう,penelitian;研究者,けんきゅうしゃ,peneliti;研究室,けんきゅうしつ,laboratorium;究明,きゅうめい,penyelidikan;探究,たんきゅう,penjelajahan;学究,がっきゅう,penelitian akademis
楽|13|senang,mudah,musik|たのしい,たのしむ|ガク,ラク|Perasaan dan Hiburan|木|音楽,おんがく,musik;楽器,がっき,alat musik;楽しい,たのしい,menyenangkan;楽しみ,たのしみ,hal yang dinantikan;気楽,きらく,santai;娯楽,ごらく,hiburan
起|10|bangun,terjadi|おきる,おこる,おこす|キ|Kehidupan dan Aktivitas|走|起床,きしょう,bangun tidur;起立,きりつ,berdiri;起動,きどう,menyalakan perangkat;起業,きぎょう,mendirikan usaha;起点,きてん,titik awal;早起き,はやおき,bangun pagi
着|12|memakai,tiba|きる,きせる,つく,つける|チャク,ジャク|Pakaian dan Transportasi|衣|到着,とうちゃく,kedatangan;着物,きもの,kimono;着席,ちゃくせき,duduk;下着,したぎ,pakaian dalam;着用,ちゃくよう,pemakaian;接着,せっちゃく,perekat
店|8|toko|みせ|テン|Perdagangan dan Tempat|广|店員,てんいん,pegawai toko;店長,てんちょう,kepala toko;開店,かいてん,pembukaan toko;閉店,へいてん,penutupan toko;売店,ばいてん,kios;本店,ほんてん,toko pusat
病|10|sakit,penyakit|やむ,やまい|ビョウ,ヘイ|Kesehatan|疒|病院,びょういん,rumah sakit;病気,びょうき,penyakit;病人,びょうにん,orang sakit;病室,びょうしつ,ruang pasien;看病,かんびょう,merawat orang sakit;急病,きゅうびょう,sakit mendadak
質|15|mutu,sifat,pertanyaan| - |シツ,シチ,チ|Ilmu dan Kualitas|貝|質問,しつもん,pertanyaan;品質,ひんしつ,kualitas;性質,せいしつ,sifat;体質,たいしつ,kondisi tubuh;本質,ほんしつ,hakikat;物質,ぶっしつ,zat
待|9|menunggu|まつ|タイ|Aktivitas dan Waktu|彳|期待,きたい,harapan;招待,しょうたい,undangan;待合室,まちあいしつ,ruang tunggu;待機,たいき,siaga;接待,せったい,menjamu tamu;待望,たいぼう,penantian
試|13|mencoba,ujian|こころみる,ためす|シ|Pendidikan dan Aktivitas|言|試験,しけん,ujian;試合,しあい,pertandingan;試作,しさく,prototipe;試着,しちゃく,mencoba pakaian;試食,ししょく,mencicipi makanan;入試,にゅうし,ujian masuk
族|11|keluarga,kelompok| - |ゾク|Keluarga dan Masyarakat|方|家族,かぞく,keluarga;民族,みんぞく,suku bangsa;水族館,すいぞくかん,akuarium;親族,しんぞく,kerabat;一族,いちぞく,klan;部族,ぶぞく,suku
銀|14|perak|しろがね|ギン|Benda dan Ekonomi|金|銀行,ぎんこう,bank;銀色,ぎんいろ,warna perak;銀貨,ぎんか,koin perak;銀河,ぎんが,galaksi;水銀,すいぎん,merkuri;銀座,ぎんざ,Ginza
早|6|cepat,awal|はやい,はやまる,はやめる|ソウ,サッ|Waktu dan Kecepatan|日|早朝,そうちょう,pagi-pagi;早退,そうたい,pulang lebih awal;早速,さっそく,segera;早口,はやくち,bicara cepat;早起き,はやおき,bangun pagi;早期,そうき,periode awal
映|9|memantulkan,menayangkan|うつる,うつす,はえる|エイ|Media dan Seni|日|映画,えいが,film;上映,じょうえい,penayangan film;映像,えいぞう,gambar visual;反映,はんえい,refleksi;映画館,えいがかん,bioskop;映写,えいしゃ,proyeksi gambar
親|16|orang tua,dekat|おや,したしい,したしむ|シン|Keluarga dan Hubungan|見|親切,しんせつ,baik hati;両親,りょうしん,kedua orang tua;親友,しんゆう,sahabat dekat;親子,おやこ,orang tua dan anak;親族,しんぞく,kerabat;親善,しんぜん,persahabatan
験|18|ujian,pengalaman| - |ケン,ゲン|Pendidikan dan Pengalaman|馬|経験,けいけん,pengalaman;試験,しけん,ujian;実験,じっけん,eksperimen;受験,じゅけん,mengikuti ujian;体験,たいけん,pengalaman langsung;験担ぎ,げんかつぎ,ritual pembawa keberuntungan
英|8|Inggris,unggul| - |エイ|Bahasa dan Negara|艹|英語,えいご,bahasa Inggris;英国,えいこく,Inggris;英文,えいぶん,teks bahasa Inggris;英会話,えいかいわ,percakapan bahasa Inggris;英雄,えいゆう,pahlawan;英才,えいさい,bakat luar biasa
医|7|dokter,pengobatan| - |イ|Kesehatan dan Profesi|匚|医者,いしゃ,dokter;医学,いがく,ilmu kedokteran;医療,いりょう,pelayanan medis;医院,いいん,klinik;医師,いし,dokter;歯医者,はいしゃ,dokter gigi
仕|5|melayani,bekerja|つかえる|シ,ジ|Pekerjaan dan Kehidupan|人|仕事,しごと,pekerjaan;仕方,しかた,cara;仕組み,しくみ,sistem;仕上げ,しあげ,penyelesaian;仕入れ,しいれ,pembelian stok;奉仕,ほうし,pelayanan
去|5|pergi,berlalu|さる|キョ,コ|Waktu dan Gerakan|厶|去年,きょねん,tahun lalu;過去,かこ,masa lalu;消去,しょうきょ,penghapusan;撤去,てっきょ,pembongkaran;去勢,きょせい,kastrasi;退去,たいきょ,pengosongan tempat
味|8|rasa,makna|あじ,あじわう|ミ|Makanan dan Perasaan|口|意味,いみ,arti;味方,みかた,kawan;趣味,しゅみ,hobi;味覚,みかく,indra perasa;調味料,ちょうみりょう,bumbu;興味,きょうみ,minat
写|5|menyalin,memotret|うつす,うつる|シャ|Seni dan Media|冖|写真,しゃしん,foto;写生,しゃせい,menggambar dari objek;複写,ふくしゃ,fotokopi;写本,しゃほん,salinan naskah;描写,びょうしゃ,penggambaran;写実,しゃじつ,realisme
字|6|huruf,karakter|あざ|ジ|Bahasa dan Pendidikan|子|文字,もじ,huruf;漢字,かんじ,kanji;数字,すうじ,angka;字典,じてん,kamus karakter;名字,みょうじ,nama keluarga;字幕,じまく,subtitle
答|12|menjawab,jawaban|こたえる,こたえ|トウ|Komunikasi dan Pendidikan|竹|回答,かいとう,jawaban;答え,こたえ,jawaban;答案,とうあん,lembar jawaban;返答,へんとう,tanggapan;正答,せいとう,jawaban benar;応答,おうとう,respons
夜|8|malam|よ,よる|ヤ|Waktu dan Kehidupan|夕|夜間,やかん,waktu malam;今夜,こんや,malam ini;昨夜,さくや,tadi malam;夜中,よなか,tengah malam;深夜,しんや,larut malam;徹夜,てつや,tidak tidur semalaman
音|9|suara,bunyi|おと,ね|オン,イン|Komunikasi dan Seni|音|音楽,おんがく,musik;発音,はつおん,pelafalan;音声,おんせい,suara;騒音,そうおん,kebisingan;母音,ぼいん,vokal;子音,しいん,konsonan
注|8|menuangkan,memperhatikan|そそぐ|チュウ|Aktivitas dan Komunikasi|氵|注意,ちゅうい,perhatian;注文,ちゅうもん,pesanan;注目,ちゅうもく,perhatian;注射,ちゅうしゃ,suntikan;注釈,ちゅうしゃく,catatan penjelas;集中,しゅうちゅう,konsentrasi
帰|10|pulang|かえる,かえす|キ|Kehidupan dan Gerakan|止|帰国,きこく,pulang ke negara asal;帰宅,きたく,pulang ke rumah;帰省,きせい,pulang kampung;復帰,ふっき,kembali;帰化,きか,naturalisasi;帰り道,かえりみち,jalan pulang
古|5|lama,kuno|ふるい,ふるす|コ|Waktu dan Sejarah|口|中古,ちゅうこ,barang bekas;古代,こだい,zaman kuno;古典,こてん,klasik;古本,ふるほん,buku bekas;古着,ふるぎ,pakaian bekas;古風,こふう,gaya kuno
歌|14|lagu,menyanyi|うた,うたう|カ|Seni dan Musik|欠|歌手,かしゅ,penyanyi;歌詞,かし,lirik lagu;歌声,うたごえ,suara nyanyian;国歌,こっか,lagu kebangsaan;校歌,こうか,lagu sekolah;短歌,たんか,puisi tanka
買|12|membeli|かう|バイ|Perdagangan dan Ekonomi|貝|買物,かいもの,belanja;買収,ばいしゅう,akuisisi;売買,ばいばい,jual beli;買主,かいぬし,pembeli;買い手,かいて,pembeli;購買,こうばい,pembelian
悪|11|buruk,jahat|わるい,わる|アク,オ|Sifat dan Keadaan|心|悪口,わるぐち,perkataan buruk;悪人,あくにん,orang jahat;悪天候,あくてんこう,cuaca buruk;最悪,さいあく,paling buruk;悪化,あっか,perburukan;悪夢,あくむ,mimpi buruk
図|7|gambar,peta,rencana|はかる|ズ,ト|Seni dan Geografi|囗|地図,ちず,peta;図書館,としょかん,perpustakaan;図形,ずけい,bentuk geometri;図表,ずひょう,grafik;意図,いと,maksud;合図,あいず,isyarat
週|11|minggu| - |シュウ|Waktu|辶|週間,しゅうかん,minggu;毎週,まいしゅう,setiap minggu;先週,せんしゅう,minggu lalu;今週,こんしゅう,minggu ini;来週,らいしゅう,minggu depan;週末,しゅうまつ,akhir pekan
室|9|ruangan|むろ|シツ|Tempat dan Bangunan|宀|教室,きょうしつ,ruang kelas;会議室,かいぎしつ,ruang rapat;寝室,しんしつ,kamar tidur;研究室,けんきゅうしつ,laboratorium;和室,わしつ,ruang bergaya Jepang;温室,おんしつ,rumah kaca
歩|8|berjalan,langkah|あるく,あゆむ|ホ,ブ,フ|Gerakan dan Transportasi|止|散歩,さんぽ,jalan-jalan;歩道,ほどう,trotoar;徒歩,とほ,berjalan kaki;歩行,ほこう,berjalan;進歩,しんぽ,kemajuan;歩数,ほすう,jumlah langkah
風|9|angin,gaya|かぜ,かざ|フウ,フ|Alam dan Cuaca|風|台風,たいふう,topan;風邪,かぜ,flu;風景,ふうけい,pemandangan;和風,わふう,gaya Jepang;洋風,ようふう,gaya Barat;強風,きょうふう,angin kencang
紙|10|kertas|かみ|シ|Benda dan Pendidikan|糸|手紙,てがみ,surat;用紙,ようし,kertas formulir;新聞紙,しんぶんし,kertas koran;和紙,わし,kertas Jepang;折り紙,おりがみ,origami;紙面,しめん,halaman cetak
黒|11|hitam|くろ,くろい|コク|Warna dan Sifat|黒|黒板,こくばん,papan tulis;黒字,くろじ,laba;黒人,こくじん,orang berkulit hitam;黒髪,くろかみ,rambut hitam;真っ黒,まっくろ,hitam pekat;黒色,こくしょく,warna hitam
花|7|bunga|はな|カ,ケ|Alam dan Tumbuhan|艹|花見,はなみ,melihat bunga sakura;花火,はなび,kembang api;花屋,はなや,toko bunga;花束,はなたば,buket bunga;生け花,いけばな,ikebana;開花,かいか,mekarnya bunga
春|9|musim semi|はる|シュン|Musim dan Alam|日|春休み,はるやすみ,libur musim semi;春分,しゅんぶん,ekuinoks musim semi;青春,せいしゅん,masa muda;春風,はるかぜ,angin musim semi;春季,しゅんき,musim semi;春雨,はるさめ,hujan musim semi
赤|7|merah|あか,あかい|セキ,シャク|Warna dan Sifat|赤|赤ちゃん,あかちゃん,bayi;赤字,あかじ,kerugian;赤道,せきどう,garis khatulistiwa;赤十字,せきじゅうじ,Palang Merah;真っ赤,まっか,merah menyala;赤色,せきしょく,warna merah
青|8|biru,hijau|あお,あおい|セイ,ショウ|Warna dan Alam|青|青空,あおぞら,langit biru;青年,せいねん,pemuda;青少年,せいしょうねん,remaja;青信号,あおしんごう,lampu hijau;青色,あおいろ,warna biru;青葉,あおば,daun hijau
館|16|gedung,balai|やかた|カン|Tempat dan Bangunan|食|図書館,としょかん,perpustakaan;映画館,えいがかん,bioskop;体育館,たいいくかん,gedung olahraga;美術館,びじゅつかん,museum seni;博物館,はくぶつかん,museum;大使館,たいしかん,kedutaan besar
屋|9|rumah,toko|や|オク|Tempat dan Bangunan|尸|本屋,ほんや,toko buku;花屋,はなや,toko bunga;肉屋,にくや,toko daging;屋上,おくじょう,atap gedung;屋内,おくない,dalam ruangan;屋外,おくがい,luar ruangan
色|6|warna|いろ|ショク,シキ|Warna dan Sifat|色|色紙,しきし,kertas warna;景色,けしき,pemandangan;特色,とくしょく,ciri khas;茶色,ちゃいろ,cokelat;色彩,しきさい,warna-warni;無色,むしょく,tidak berwarna
走|7|berlari|はしる|ソウ|Gerakan dan Olahraga|走|走行,そうこう,berkendara;競走,きょうそう,lomba lari;走者,そうしゃ,pelari;暴走,ぼうそう,melaju tak terkendali;走力,そうりょく,kemampuan berlari;逃走,とうそう,pelarian
秋|9|musim gugur|あき|シュウ|Musim dan Alam|禾|秋分,しゅうぶん,ekuinoks musim gugur;秋風,あきかぜ,angin musim gugur;秋雨,あきさめ,hujan musim gugur;初秋,しょしゅう,awal musim gugur;晩秋,ばんしゅう,akhir musim gugur;秋季,しゅうき,musim gugur
夏|10|musim panas|なつ|カ,ゲ|Musim dan Alam|夂|夏休み,なつやすみ,liburan musim panas;夏季,かき,musim panas;夏服,なつふく,pakaian musim panas;真夏,まなつ,pertengahan musim panas;初夏,しょか,awal musim panas;夏祭り,なつまつり,festival musim panas
習|11|belajar,berlatih|ならう|シュウ,ジュウ|Pendidikan dan Aktivitas|羽|練習,れんしゅう,latihan;学習,がくしゅう,pembelajaran;習慣,しゅうかん,kebiasaan;習字,しゅうじ,latihan menulis;予習,よしゅう,belajar sebelum pelajaran;復習,ふくしゅう,mengulang pelajaran
駅|14|stasiun| - |エキ|Transportasi|馬|駅前,えきまえ,depan stasiun;駅員,えきいん,petugas stasiun;駅長,えきちょう,kepala stasiun;駅弁,えきべん,bekal makanan stasiun;終着駅,しゅうちゃくえき,stasiun akhir;最寄り駅,もよりえき,stasiun terdekat
洋|9|Barat,samudra| - |ヨウ|Negara dan Kebudayaan|氵|洋服,ようふく,pakaian Barat;洋食,ようしょく,masakan Barat;洋画,ようが,film/lukisan Barat;西洋,せいよう,dunia Barat;東洋,とうよう,dunia Timur;洋風,ようふう,gaya Barat
旅|10|perjalanan|たび|リョ|Transportasi dan Kehidupan|方|旅行,りょこう,perjalanan;旅館,りょかん,penginapan Jepang;旅人,たびびと,pelancong;旅費,りょひ,biaya perjalanan;旅先,たびさき,tempat tujuan perjalanan;旅立ち,たびだち,keberangkatan
服|8|pakaian| - |フク|Pakaian dan Kehidupan|月|洋服,ようふく,pakaian Barat;制服,せいふく,seragam;和服,わふく,pakaian Jepang;衣服,いふく,pakaian;服装,ふくそう,penampilan berpakaian;服用,ふくよう,konsumsi obat
夕|3|sore|ゆう|セキ|Waktu|夕|夕方,ゆうがた,sore;夕日,ゆうひ,matahari senja;夕食,ゆうしょく,makan malam;夕刊,ゆうかん,koran sore;七夕,たなばた,festival Tanabata;夕暮れ,ゆうぐれ,senja
借|10|meminjam|かりる|シャク|Kehidupan dan Aktivitas|人|借金,しゃっきん,utang;借用,しゃくよう,peminjaman;貸借,たいしゃく,pinjam-meminjam;借家,しゃくや,rumah sewaan;借地,しゃくち,tanah sewaan;借主,かりぬし,peminjam
曜|18|hari dalam minggu| - |ヨウ|Waktu dan Kalender|日|曜日,ようび,hari dalam minggu;月曜日,げつようび,Senin;火曜日,かようび,Selasa;水曜日,すいようび,Rabu;木曜日,もくようび,Kamis;金曜日,きんようび,Jumat
飲|12|minum|のむ|イン|Makanan dan Aktivitas|食|飲食,いんしょく,makan dan minum;飲料,いんりょう,minuman;飲酒,いんしゅ,minum alkohol;飲み物,のみもの,minuman;飲み会,のみかい,acara minum bersama;飲食店,いんしょくてん,restoran
肉|6|daging|にく|ニク|Makanan|肉|牛肉,ぎゅうにく,daging sapi;豚肉,ぶたにく,daging babi;鶏肉,とりにく,daging ayam;肉料理,にくりょうり,masakan daging;筋肉,きんにく,otot;肉体,にくたい,tubuh fisik
貸|12|meminjamkan|かす|タイ|Kehidupan dan Ekonomi|貝|貸出,かしだし,peminjaman;貸金,かしきん,uang pinjaman;貸家,かしや,rumah kontrakan;貸切,かしきり,sewa penuh;貸付,かしつけ,pemberian pinjaman;賃貸,ちんたい,sewa-menyewa
堂|11|gedung,balai| - |ドウ|Tempat dan Bangunan|土|食堂,しょくどう,ruang makan;講堂,こうどう,aula;本堂,ほんどう,bangunan utama kuil;堂々,どうどう,gagah/berwibawa;礼堂,れいどう,ruang upacara;殿堂,でんどう,gedung kehormatan
鳥|11|burung|とり|チョウ|Hewan dan Alam|鳥|鳥類,ちょうるい,kelompok burung;小鳥,ことり,burung kecil;白鳥,はくちょう,angsa;野鳥,やちょう,burung liar;鳥肉,とりにく,daging unggas;鳥居,とりい,gerbang kuil Shinto
飯|12|nasi,makanan|めし|ハン|Makanan|食|ご飯,ごはん,nasi/makanan;朝飯,あさめし,sarapan;昼飯,ひるめし,makan siang;夕飯,ゆうはん,makan malam;炊飯,すいはん,memasak nasi;飯店,はんてん,restoran
勉|10|berusaha,belajar| - |ベン|Pendidikan dan Aktivitas|力|勉強,べんきょう,belajar;勤勉,きんべん,rajin;勉学,べんがく,studi;勉強会,べんきょうかい,kelompok belajar;勉強机,べんきょうづくえ,meja belajar;勉強法,べんきょうほう,metode belajar
冬|5|musim dingin|ふゆ|トウ|Musim dan Alam|夂|冬休み,ふゆやすみ,libur musim dingin;冬季,とうき,musim dingin;冬服,ふゆふく,pakaian musim dingin;真冬,まふゆ,pertengahan musim dingin;初冬,しょとう,awal musim dingin;冬眠,とうみん,hibernasi
昼|9|siang|ひる|チュウ|Waktu dan Kehidupan|日|昼食,ちゅうしょく,makan siang;昼休み,ひるやすみ,istirahat siang;昼間,ひるま,waktu siang;昼寝,ひるね,tidur siang;昼夜,ちゅうや,siang dan malam;白昼,はくちゅう,siang bolong
茶|9|teh|ちゃ|チャ,サ|Makanan dan Minuman|艹|お茶,おちゃ,teh;茶道,さどう,upacara minum teh;茶色,ちゃいろ,cokelat;喫茶店,きっさてん,kedai kopi;緑茶,りょくちゃ,teh hijau;紅茶,こうちゃ,teh hitam
弟|7|adik laki-laki|おとうと|テイ,ダイ,デ|Keluarga|弓|弟子,でし,murid;兄弟,きょうだい,saudara laki-laki;弟分,おとうとぶん,adik angkat;義弟,ぎてい,adik ipar laki-laki;実弟,じってい,adik kandung laki-laki;末弟,まってい,adik laki-laki termuda
牛|4|sapi|うし|ギュウ|Hewan dan Makanan|牛|牛肉,ぎゅうにく,daging sapi;牛乳,ぎゅうにゅう,susu sapi;牛丼,ぎゅうどん,nasi daging sapi;牛舎,ぎゅうしゃ,kandang sapi;乳牛,にゅうぎゅう,sapi perah;和牛,わぎゅう,sapi Wagyu
魚|11|ikan|さかな,うお|ギョ|Hewan dan Makanan|魚|魚類,ぎょるい,kelompok ikan;金魚,きんぎょ,ikan mas;熱帯魚,ねったいぎょ,ikan tropis;魚市場,うおいちば,pasar ikan;鮮魚,せんぎょ,ikan segar;魚料理,さかなりょうり,masakan ikan
兄|5|kakak laki-laki|あに|ケイ,キョウ|Keluarga|儿|兄弟,きょうだい,saudara;兄貴,あにき,kakak laki-laki;義兄,ぎけい,kakak ipar laki-laki;実兄,じっけい,kakak kandung laki-laki;長兄,ちょうけい,kakak tertua;兄妹,けいまい,kakak laki-laki dan adik perempuan
犬|4|anjing|いぬ|ケン|Hewan dan Kehidupan|犬|子犬,こいぬ,anak anjing;番犬,ばんけん,anjing penjaga;愛犬,あいけん,anjing kesayangan;野犬,やけん,anjing liar;犬小屋,いぬごや,kandang anjing;盲導犬,もうどうけん,anjing penuntun
妹|8|adik perempuan|いもうと|マイ|Keluarga|女|姉妹,しまい,saudara perempuan;義妹,ぎまい,adik ipar perempuan;実妹,じつまい,adik kandung perempuan;妹分,いもうとぶん,adik angkat perempuan;兄妹,けいまい,kakak laki-laki dan adik perempuan
姉|8|kakak perempuan|あね|シ|Keluarga|女|姉妹,しまい,saudara perempuan;義姉,ぎし,kakak ipar perempuan;実姉,じっし,kakak kandung perempuan;姉弟,してい,kakak perempuan dan adik laki-laki;姉貴,あねき,kakak perempuan
漢|13|Tiongkok,kanji| - |カン|Bahasa dan Sejarah|氵|漢字,かんじ,huruf kanji;漢語,かんご,kata Sino-Jepang;漢文,かんぶん,teks klasik Tiongkok;漢和,かんわ,Tiongkok dan Jepang;漢方,かんぽう,pengobatan tradisional Jepang;漢民族,かんみんぞく,etnis Han
#N3
政|9|politik, pemerintahan|まつりごと|セイ, ショウ|Politik|攴|政治,せいじ,politik;政権,せいけん,rezim pemerintahan;行政,ぎょうせい,administrasi;政党,せいとう,partai politik;政令,せいれい,peraturan pemerintah;干政,かんせい,intervensi politik
議|20|musyawarah, debat, diskusi|-|ギ|Komunikasi|言|会議,かいぎ,rapat;議論,ぎろん,diskusi;協議,きょうぎ,konsultasi;議員,ぎいん,anggota parlemen;議長,ぎちょう,ketua rapat;議決,ぎけつ,pengambilan keputusan
民|5|rakyat, warga negara|たみ|ミン|Sosial|氏|国民,こくみん,warga negara;市民,しみん,warga kota;民主,みんしゅ,demokrasi;民間,みんかん,swasta;農民,のうみん,petani;移民,いみん,imigran
連|10|membawa, menghubungkan, berturut-turut|つら.なる, つら.ねる, つ.れる|レン|Hubungan|辵|連絡,れんらく,kontak;連続,れんぞく,berkelanjutan;連合,れんごう,aliansi;連日,れんじつ,setiap hari;連帯,れんたい,solidaritas;連鎖,れんさ,rantai
対|7|berhadapan, versus, anti, pasangan|あいて, こた.える|タイ, ツイ|Hubungan|寸|対立,たいりつ,konflik;対応,たいおう,tanggapan;反対,はんたい,oposisi;対話,たいわ,dialog;絶対,ぜったい,mutlak;対等,たいとう,setara
部|11|bagian, departemen, seksi|-|ブ|Organisasi|邑|部分,ぶぶん,bagian;部門,ぶもん,departemen;学部,がくぶ,fakultas;全部,ぜんぶ,semua;内部,ないぶ,internal;部長,ぶちょう,kepala bagian
合|6|cocok, bertemu, menggabungkan|あ.う, あ.わす, あ.わせる|ゴウ, ガッ|Hubungan|口|合計,ごうけい,jumlah total;合格,ごうかく,lulus;都合,つごう,situasi/kenyamanan;合意,ごうい,kesepakatan;連合,れんごう,aliansi;合図,あいず,isyarat
市|5|kota, pasar|いち|シ|Tempat|巾|市場,しじょう,pasar;市民,しみん,warga kota;都市,とし,kota;市長,しちょう,walikota;市役所,しやくしょ,kantor walikota;市街,しがい,kota (pusat kota)
内|4|dalam, di dalam, antara|うち|ナイ, ダイ|Posisi|冂|国内,こくない,dalam negeri;内容,ないよう,isi/konten;案内,あんない,panduan;以内,いない,dalam batas;室内,しつない,di dalam ruangan;内線,ないせん,jalur internal
相|9|saling, bersama, penampilan, menteri|あい|ソウ, ショウ|Hubungan|木|相談,そうだん,konsultasi;相手,あいて,pasangan/lawan;相互,そうご,saling;首相,しゅしょう,perdana menteri;真相,しんそう,kebenaran;相場,そうば,harga pasar
定|8|menetapkan, menentukan, tetap|さだ.める, さだ.まる|テイ, ジョウ|Aturan|宀|決定,けってい,keputusan;予定,よてい,rencana;定義,ていぎ,definisi;安定,あんてい,stabil;定価,ていか,harga tetap;定員,ていいん,kapasitas
回|6|berputar, kali, putaran|まわ.る, まわ.す|カイ, エ|Gerakan|囗|回転,かいてん,rotasi;回復,かいふく,pemulihan;今回,こんかい,kali ini;次回,じかい,berikutnya;回線,かいせん,jalur komunikasi;回収,かいしゅう,pengumpulan
選|15|memilih|えら.ぶ|セン|Tindakan|辵|選択,せんたく,pilihan;選挙,せんじょ,pemilihan;選抜,せんばつ,seleksi;当選,とうせん,terpilih;厳選,げんせん,seleksi ketat;選考,せんこう,seleksi (untuk pekerjaan)
米|6|beras, Amerika, meter|こめ|ベイ, マイ|Makanan|米|米国,べいこく,Amerika Serikat;米飯,べいはん,nasi;純米,じゅんまい,beras murni;米粉,こめこ,tepung beras;渡米,とべい,pergi ke Amerika;米価,べいか,harga beras
実|8|kenyataan, buah, kebenaran|み, みの.る|ジツ|Abstrak|宀|実際,じっさい,kenyataan;実現,じつげん,realisasi;事実,じじつ,fakta;充実,じゅうじつ,kepenuhan;実力,じつりょき,kemampuan sebenarnya;実習,じっしゅう,magang
関|14|hubungan, penghalang, kepedulian|せき, かか.わる|カン|Hubungan|門|関係,かんけい,hubungan;関心,かんしん,minat;関税,かんぜい,bea cukai;通関,つうかん,clearence bea cukai;関所,せきしょ,pos pemeriksaan;関与,かんよ,keterlibatan
決|7|memutuskan, menyelesaikan|き.める, き.まる|ケツ|Tindakan|水|決定,けってい,keputusan;解決,かいけつ,solusi;決意,けつい,tekad;否決,ひけつ,penolakan;決戦,けっせん,pertempuran menentukan;決断,けつだん,keputusan tegas
全|6|seluruh, semua, lengkap|まった.く, すべ.て|ゼン|Kuantitas|入|全部,ぜんぶ,semua;完全,かんぜん,sempurna;全国,ぜんこく,seluruh negeri;安全,あんぜん,keamanan;全員,ぜんいん,semua anggota;全力,ぜんりょき,segenap tenaga
表|8|permukaan, tabel, mengekspresikan|おもて, あらわ.す|ヒョウ|Abstrak|衣|表現,ひょうげん,ekspresi;表面,ひょうめん,permukaan;発表,はっぴょう,pengumuman;代表,だいひょう,perwakilan;表紙,ひょうし,kulit buku;表彰,ひょうしょう,penghargaan
戦|13|perang, pertempuran|たたか.う, いくさ|セン|Konflik|戈|戦争,せんそう,perang;戦闘,せんとう,pertempuran;挑戦,ちょうせん,tantangan;戦績,せんせき,rekor perang;作戦,さくせん,strategi;戦力,せんりょき,kekuatan perang
経|11|melewati, mengelola, sutra|へ.る, た.つ|ケイ, キョウ|Waktu|糸|経済,けいざい,ekonomi;経験,けいけん,pengalaman;経営,けいえい,manajemen;経過,けいか,perjalanan waktu;神経,しんけい,saraf;経費,けいひ,biaya
最|12|paling, terbaik, ekstrem|もっと.も, つま|サイ, シュ|Kuantitas|日|最高,さいこう,terbaik;最近,さいきん,terbaru;最大,さいだい,maksimum;最初,さいしょ,pertama;最終,さいしゅう,terakhir;最小,さいしょう,minimum
現|11|sekarang, muncul, kenyataan|あらわ.れる, あらわ.す|ゲン|Waktu|玉|現在,げんざい,sekarang;実現,じつげん,realisasi;現象,げんしょう,fenomena;現金,げんきん,uang tunai;表現,ひょうげん,ekspresi;現場,げんば,tempat kejadian
調|15|menyelidiki, nada, menyesuaikan|しら.べる, ととの.える|チョウ|Tindakan|言|調査,ちょうさ,investigasi;調整,ちょうせい,penyesuaian;調子,ちょうし,kondisi;協調,きょうちょう,kerjasama;調停,ちょうてい,mediasi;調和,ちょうわ,harmoni
化|4|berubah, -isasi|ば.ける, ば.かす|カ, ケ|Perubahan|人|変化,へんか,perubahan;文化,ぶんか,kebudayaan;化学,かがく,kimia;進化,しんか,evolusi;強化,きょうか,penguatan;消化,しょうか,pencernaan
当|6|mengenai, tepat, sekarang|あ.たる, あ.てる|トウ|Posisi|小|当然,とうぜん,wajar;担当,たんとう,bertanggung jawab;該当,がいとう,berkaitan;当時,とうじ,pada waktu itu;適当,てきとう,tepat;当面,とうめん,untuk saat ini
約|9|janji, kontrak, kira-kira|-|ヤク|Hubungan|糸|約束,やくそく,janji;予約,よやく,reservasi;条約,じょうやく,perjanjian;節約,せつやく,penghematan;規約,きやく,peraturan;約款,やっかん,ketentuan
首|9|leher, kepala, pemimpin|くび|シュ|Tubuh|首|首相,しゅしょう,perdana menteri;首脳,しゅのう,pemimpin;首長,しゅちょう,kepala daerah;首輪,くびわ,kalung anjing;首筋,くびすじ,tengkuk;首尾,しゅび,hasil/kesuksesan
法|8|hukum, metode|-|ホウ, ボウ|Aturan|水|法律,ほうりつ,hukum;方法,ほうほう,metode;経済学,けいざいがく,ekonomi (contoh lain: 法学,ほうがく,ilmu hukum);憲法,けんぽう,konstitusi;違法,いほう,ilegal;司法,しほう,yudisial
性|9|sifat, jenis, gender|と.う|セイ, ショウ|Abstrak|心|性格,せいかく,karakter;性別,せいべつ,jenis kelamin;可能性,かのうせい,kemungkinan;女性,じょせい,wanita;男性,だんせい,pria;性質,せいしつ,sifat dasar
要|13|penting, diperlukan, inti|かなめ|ヨウ|Kebutuhan|西|必要,ひつよう,diperlukan;重要,じゅうよう,penting;要求,ようきゅう,tuntutan;主要,しゅよう,utama;要素,ようそ,elemen;要約,ようやく,ringkasan
制|10|sistem, aturan, membatasi|-|セイ|Aturan|刀|制度,せいど,sistem;政治,せいじ,politik;制限,せいげん,pembatasan;制定,せいてい,pembentukan (hukum);抑制,よくせい,penekanan;体制,たいせい,struktur
治|7|mengatur, menyembuhkan, memerintah|おさ.める, なお.る|ジ|Pemerintahan|水|治療,ちりょう,pengobatan;治安,ちあん,keamanan publik;統治,とうち,pemerintahan;自治,じち,otonomi daerah;政治,せいじ,politik;法治,ほうち,rule of law
務|11|tugas, urusan, pekerjaan|-|ム|Tindakan|力|任務,にんむ,tugas;業務,ぎょうむ,pekerjaan/bisnis;事務,じむ,administrasi;義務,ぎむ,kewajiban;財務,ざいむ,keuangan;実務,じつむ,praktis
成|6|menjadi, selesai, sukses|な.る, な.す, -な.す|セイ, ジョウ|Hasil|戈|成功,せいこう,kesuksesan;完成,かんせい,penyelesaian;成長,せいちょう,pertumbuhan;形成,けいせい,pembentukan;成人,せいじん,orang dewasa;達成,たっせい,pencapaian
期|12|waktu, periode, harapan|-|キ|Waktu|月|期間,きかん,periode;期待,きたい,harapan;時期,じき,waktu/masa;定期,ていき,rutin;学期,がっき,semester;期限,きげん,batas waktu
取|8|mengambil, mendapatkan|と.る, と.り, とり-|シュ|Tindakan|耳|取得,しゅとく,mendapatkan;取引,とりひき,transaksi;採用,さいよう,perekrutan;選択,せんたく,pilihan (contoh: 取る);取消,とりけし,pembatalan;取材,しゅざい,liputan
都|10|kota, metropolis, ibu kota|みやこ|ト|Tempat|邑|東京,とうきょう,Tokyo;都市,とし,kota besar;首都,しゅと,ibu kota;都道府県,とどうふけん,prefektur;京都,きょうと,Kyoto;都会,とかい,kota metropolitan
和|8|damai, harmoni, Jepang|やわ.らぐ, わ.す, -わ.す|ワ|Hubungan|口|日本,にほん,Jepang;平和,へいわ,perdamaian;和解,わけい,rekonsiliasi;調和,ちょうわ,harmonisasi;柔和,にゅうわ,lembut;昭和,しょうわ,Zaman Showa
機|16|mesin, peluang, kesempatan|-|キ|Teknologi|木|機会,きかい,kesempatan;機械,きかい,mesin;飛行機,ひこうき,pesawat terbang;危機,きき,krisis;動機,どうき,motif;機関,きかん,institusi/mesin utama
平|5|datar, rata, damai|たい.ら, たい.らげる|ヒョウ, ビョウ|Keadaan|干|平和,へいわ,perdamaian;平均,へいきin,rata-rata;水平,すいへい,horisontal;平等,びょうどう,setara;平凡,へいぼん,biasa;平気,へいき,tenang
加|5|menambah, berpartisipasi|-|カ|Kuantitas|力|参加,さんか,partisipasi;増加,ぞうか,peningkatan;加工,かこう,proses bahan mentah;加入,かにゅう,gabung;追加,つい加,tambahan;強化,きょうか,penguatan
受|8|menerima, menanggung|う.ける, う.かる|ジュ|Interaksi|又|受付,うけつけ,resepsionis;教育,きょういく,pendidikan (contoh: 受ける);影響,えいきょう,pengaruh;享受,きょうじゅ,nikmati;受理,じゅり,penerimaan resmi;受信,じゅしin,penerimaan sinyal
続|11|melanjutkan, meneruskan|つづ.く, つづ.ける, つぎ|ゾク|Waktu|糸|連続,れんぞく,berkelanjutan;継続,けいぞく,kelanjutan;伝統,でんとう,tradisi;後続,こうぞく,penerus;続報,ぞくほう,berita lanjutan;続編,ぞくへん,sekuel
進|12|maju, berkembang, masuk|すす.む, すす.める|シン|Gerakan|辵|前進,ぜんしん,maju;発展,はってん,perkembangan (contoh: 進む);進行,しんこう,progres;紹介,しょうかい,perkenalan;促進,そくしin,akselerasi;進化,しんか,evolusi
数|13|angka, jumlah, sering|かず, かぞ.える|スウ, ス, そく|Kuantitas|攵|数学,すうがく,matematika;数字,すうじ,angka;数量,すうりょう,kuantitas;少数,しょうすう,minoritas;多数,たすう,Mayoritas;回数,かいすう,jumlah kali
記|9|mencatat, tanda|-|キ|Komunikasi|言|記録,きろく,catatan/rekor;日記,にっき,buku harian;記憶,きおく,ingatan;表記,ひょうき,penulisan;標記,ひょうき,penanda;記事,きじ,artikel berita
初|7|pertama, awal, pemula|はじ.める, はじめ|ショ|Waktu|衣|最初,さいしょ,pertama;初心,しょしん,pemula;初期,しょき,awal periode;初夏,しょか,awal musim panas;初代,しょだい,generasi pertama;経験,けいけん (contoh: 初めて)
指|9|jari, menunjuk, arah|ゆび, さ.す|シ|Tubuh|手|指導,しどう,bimbingan;指示,しじ,instruksi;手指,しゅし,jari tangan;指摘,してき,kritik/penunjukan;指数,しすう,indeks;指揮,しき,komando
権|15|hak, otoritas, pengaruh|-|ケン, ゴン|Sosial|木|権利,けんり,hak;権限,けんげん,wewenang;政権,せいけん,rezim;人権,じんけん,hak asasi manusia;電源,でんげん,sumber listrik;権威,けんい,otoritas
支|4|mendukung, cabang, menyokong|つか.える|シ|Tindakan|攴|支援,しえん,dukungan;支出,ししuts,pengeluaran;支持,しじ,dukungan;支部,しぶ,cabang;維持,いji,pemeliharaan;分支,ぶんし,cabang
産|11|lahir, produksi, hasil|う.む, やす.む|サン|Ekonomi|生|生産,せいさん,produksi;産業,さんぎょう,industri;製品,せいひん,produk;出産,しゅっさん,kelahiran;原料,げんりょう,bahan baku;漁業,ぎょうぎょう,perikanan (contoh: 産)
点|9|titik, poin, memeriksa|-|テン|Geometri|火|時間,じかん,waktu (contoh: 時点);地点,ちてん,lokasi;点数,てんすう,nilai;重点,じゅうて,fokus;視点,してん,perspektif;斑点,はんて,totol
報|12|laporan, balasan, kabar|-|ホウ|Komunikasi|幸|新聞,しんぶん,koran;報道,ほうどう,pelaporan;報告,ほうこく,laporan;報酬,ほうしyu,pamflet/gaji;発表,はっぴょう,pengumuman;情報,じょうほう,informasi
済|9|selesai, membantu, melintasi|す.む, す.まない|サイ, セイ|Status|水|経済,けいざい,ekonomi;解決,かいけts,solusi;生活,せいかつ,kesehatan hidup;通過,つうか,melewati;済む,すむ,selesai;救済,きゅうさい,tolongan darurat
活|12|hidup, aktif, aktivitas|-|カツ|Energi|水|活動,かつどう,aktivitas;生活,せいかつ,kesehatan hidup;活用,かつよう,pemanfaatan;活性,かっせい,aktifitas biologis;活力,かつりょく,vitalitas;復活,ふっかつ,kebangkitan kembali
原|10|asal, asli, lapangan, padang|はら, もと|ゲン|Asal|厂|原因,げんいin,penyebab;原始,げんし,primitif;原料,げんりょう,bahan baku;原則,げんそく,prinsip;高原,こうげん,dataran tinggi;元来,がんらい,asalnya
共|6|bersama, dan, total|-|キョウ|Hubungan|八|共有,きょうゆう,kepemilikan bersama;共通,きょうつう,komunal;協力,きょうりょく,kerjasama;公共,こうきょう,umum;同時,どうじ,sama waktu;共和,きょうわ,republik
得|11|mendapatkan, keuntungan, bisa|え.る, う.る|トク|Hasil|彳|獲得,かくとく,perolehan;得意,とくい,ahli/jago;所得,しょとく,penghasilan;心得,こころえ,pengetahuan;可決,かけつ (contoh: 得る);満足,まんぞく (contoh: 得る)
解|13|menguraikan, menjawab, melepaskan|と.く, と.かす|カイ|Tindakan|角|解決,かいけts,solusi;説明,せつめい,penjelasan;理解,りかい,pemahaman;解釈,かいしゃk,interpretasi;解散,かいさん,pembubaran;解放,かいほう,pembebasan
交|6|bertukar, mencampur, hubungan|まじ.わる, まじ.える|コウ|Hubungan|亠|交通,こうつu,transportasi;交換,こうかん,pertukaran;交流,こうりu,interaksi;交渉,こうしょう,negosiasi;交友,こうゆう,persahabatan;交代,こうたい,pergantian
資|13|modal, sumber daya, kualitas|-|シ|Ekonomi|貝|資源,しげん,sumber daya;資本,しほん,kapital/modal;投資,とうし,investasi;資料,しりょう,data/material;資格,しかく,kualifikasi;資金,しきん,dana
予|5|persiapan, sebelumnya, aku|あらかじ.め|ヨ|Waktu|マ|予約,よやく,reservasi;予定,よてi,rencana;予備,よび,cadangan;予測,よそく,estimasi;予告,よこく,pemberitahuan awal;予感,よかん,firasat
向|6|menghadap, arah, menuju|む.く, む.かう|コウ|Posisi|口|方向,ほうこう,arah;向前,むかえ,menyambut;向け,むけ,untuk;傾向,けいこう,tren;対象,たいしょう,objek;志向,しこう,orientasi
際|14|tepi, saat, ketika, batas|きわ, ぎわ|サイ|Waktu|阜|国際,こくさい,internasional;実際,じっさい,kenyataan;環境,かんきょう,lingkungan;際,さい,saat;境界,きょうかい,batas;海外,かいがい,luar negeri
勝|12|menang, unggul, mengalahkan|か.つ, か.てる, すぐ.れる|ショウ|Kompetisi|力|勝利,しょうり,kemenangan;競争,きょうそう,kompetisi;優勝,ゆうしょう,juara;快勝,かいしょう,kemenangan mudah;必勝,ひっしょう,pasti menang;競走,きょうそう,lomba lari
面|9|wajah, sisi, permukaan|おも, た|メン|Tubuh|面|問題,もんだi,masalah;方面,ほうめん,bidang/aspek;表面,ひょうめん,permukaan;場面,ばめん,adegan/situasi;全面,ぜんめん,seluruh bagian;顔面,がんめん,wajah
告|7|memberitahu, menyatakan, klaim|-|コク|Komunikasi|口|発表,はっぴょう,pengumuman;広告,こうこ,iklan;告訴,こくそ,pengadilan;警告,けいこく,peringatan;告白,こくはku,pengakuan;申告,しんこku,pelaporan
反|5|anti, balik, melanggar|-|ハン|Kontra|厂|反対,はんたい,oposisi;反応,はんのu,reaksi;反省,はんせい,introspeksi;反論,はんろん,bantahan;反映,はんえi,cerminan;叛逆,はんぎk,pemberontakan
判|7|memutuskan, menghakimi, stempel|-|ハン|Hukum|刂|判断,はんだn,keputusan;裁判,さいばん,pengadilan;判決,はんけts,putusan hakim;評判,ひょうばん,reputasi;印刷,いんさつ (contoh: 判子);鑑定,かんてi,penilaian ahli
認|14|mengenali, mengakui, memahami|-|ニン|Kognisi|言|認識,にんしk,pengenalan;認定,にんてi,sertifikasi;承認,しょうにん,persetujuan;確認,かくにn,konfirmasi;公認,こうにn,diakui secara resmi;誤認,ごにn,ketidakpahaman
参|11|berpartisipasi, datang, tiga|-|サン|Partisipasi|厶|参加,さんか,partisipasi;参考,さんこう,referensi;参議院,さんぎいん,Dewan Penasihat;参拝,さんぱi,kunjungan kuil;参戦,さんせん,ikut perang;参入,さんにu,masuk ke pasar
利|7|untung, tajam, faedah|-|リ|Ekonomi|刀|利益,りえki,keuntungan;利用,りよう,pemanfaatan;権利,けんり,hak;便利,べんり,nyaman/praktis;利息,りそk,bunga bank;有利,ゆうり,diuntungkan
組|11|kelompok, tim, merakit|くみ, くむ|ソ|Organisasi|糸|組織,そしki,organisasi;組合,くみあい,koperasi;構成,こうせい,struktur;組立,くみたて,perakitan;班長,はんちょう (contoh: 組);連合,れんごう (contoh: 組)
信|9|percaya, surat, keyakinan|-|シン|Komunikasi|人|信頼,しんらい,kepercayaan;通信,つうしn,komunikasi;信念,しんねn,keyakinan;信号,しんごu,lampu isyarat;信用,しんよう,kredibilitas;不信,ふしn,ketidakpercayaan
在|6|ada, di, sekarang|-|ザイ|Eksistensi|土|現在,げんざi,sekarang;存在,そんざi,eksistensi;内在,ないざi,internal;所在,しょざi,lokasi;自在,じざi,bebas;不在,ふざi,tidak ada
件|6|kasus, hal, item|-|ケン|Administrasi|人|事件,じけん,insiden/kasus;条件,じょうけん,syarat;案件,あんけん,materi kasus;物件,ぶっけん,properti;事項,じこう,hal/perkara;一件,いっけん,satu perkara
側|11|sisi, samping, pihak|-|ソク|Posisi|人|左右,さゆう,kiri kanan (contoh: 側);立場,たちば,posisi;片側,かたがわ,satu sisi;両側,りょうがわ,kedua sisi;相手,あいて,pasangan;側近,そっきn,orang dekat
任|6|tugas, tanggung jawab, menyerah|まか.せる|ニン|Tanggung Jawab|人|責任,せきにn,tanggung jawab;任命,にんめi,pengangkatan;任務,にんむ,tugas;放任,ほうにn,membiarkan;主任,しゅにn,kepala bagian;任期,にんき,masa jabatan
引|4|menarik, menarik diri, mengutip|ひ.く, ひ.きる|イン|Gerakan|弓|引用,いんよう,kutipan;導入,どうにu,implementasi;引っ越し,ひっこし,pindahan;引力,いんりょk,gravitasi;延長,えんちょう,perpanjangan;引き取り,ひきとり,pengambilan
求|7|mencari, meminta, menginginkan|-|キュウ|Kebutuhan|水|要求,ようきu,tuntutan;追求,ついきu,mengejar;請求,せいきu,tagihan/pengajuan;求人,きゅうじん,rekrutmen;要望,ようぼう,harapan;探求,たんきu,penelitian mendalam
所|8|tempat, lokasi, kantor|-|ショ|Tempat|戸|場所,ばしょ,tempat;研究所,けんきゅうじょ,institut penelitian;事務所,じむしょ,kantor;派出所,はしゅつじょ,pos polisi;箇所,かしょ,lokasi;所有,しょゆう,kepemilikan
次|6|berikutnya, urutan, kedua|つ.ぎ, つ.いで|ジ|Urutan|欠|次回,じかい,berikutnya;順序,じゅんjo,urutan;次第,しだい,segera/tergantung;次数,じすう,frekuensi;下位,かい (contoh: 次);階級,かいきゅう (contoh: 次)
昨|9|kemarin, tahun lalu|-|サク|Waktu|日|昨日,きのう,kemarin;去年,きょねn,tahun lalu;昨夜,さくや,semalam;前夜,ぜんや (contoh: 昨);先週,せんしゅう (contoh: 昨);以前,いぜん (contoh: 昨)
論|15|diskusi, teori, argumen|-|ロン|Komunikasi|言|討論,とうろん,diskusi;理論,りろん,teori;議論,ぎろん,debat;論文,ろんぶん,jurnal/artikel ilmiah;結論,けつろん,kesimpulan;評論,ひょうろん,kritik sastra
官|8|pegawai pemerintah, kantor, organ|-|カン|Pemerintahan|宀|警察,けいさつ (contoh: 官);政府,せいふ (contoh: 官);官僚,かんりょう,birokrat;法官,ほうかん,hakim;官吏,かんり,pegawai negeri;役所,やくじょ (contoh: 官)
増|12|bertambah, meningkatkan|ま.す, ま.し|ゾウ|Kuantitas|土|増加,ぞうか,peningkatan;増減,ぞうげn,fluktuasi;増産,ぞうさん,peningkatan produksi;急増,きゅうぞう,lonjakan;倍増,ばいぞu,berlipat ganda;拡張,かくちょう,ekspansi
係|9|hubungan, terikat, personil|-|ケイ|Hubungan|人|関係,かんけi,hubungan;係員,かかりい,personil/teller;掛け算,かけざん (contoh: 係);連絡,れんらく (contoh: 係);担当,たんとう (contoh: 係);関連,かんれn,keterkaitan
感|13|merasakan, emosi, kesan|-|カン|Emosi|心|感情,かんじou,emosi;感動,かんどう,terharu;感覚,かんかku,sensasi;感謝,かんしゃ,terima kasih;感想,かんそう,kesan;感染,かんせん,infeksi
情|11|perasaan, situasi, cinta|-|ジョウ, セイ|Emosi|心|状況,じょうきyou,situasi;情報,じょうほう,informasi;愛情,あいjou,cinta;事情,じじou,keadaan;表情,ひょうじou,ekspresi wajah;友情,ゆうjou,persahabatan
投|7|melempar, membuang, mendaftarkan|と.げる|トウ|Aksi|手|投票,とうひyou,pemungutan suara;投資,とうし,investasi;投稿,とうこう,kirim artikel;投入,とうにu,masukan/investasi;投射,とうしゃ,proyeksi;投身,とうしu,berdedikasi
示|5|menunjukkan, petunjuk, ilahi|-|ジ, シ|Komunikasi|示|表示,ひょうじ,penampilan;指示,しじ,instruksi;示威,じい,unjuk kekuatan;暗示,あんじ,isyarat;明示,めいじ,nyata;神示,しんじ,petunjuk dewa
変|9|berubah, aneh, transformasi|か.わる, か.える|ヘン|Perubahan|糸|変化,へんか,perubahan;変動,へんどう,fluktuasi;変更,へんこう,modifikasi;大変,たいへn,berat/sibuk;異変,いへn,anomali;変身,へんしin,transformasi
打|5|memukul, mengetik, melakukan|-|ダ, ディー|Aksi|手|電話,でんわ,telepon;打ち合わせ,うちあわせ,rapat persiapan;打撃,だげk,pukulan;打球,だきy,uji coba;打つ,うつ,memukul;打順,だじun,urutan pukul
直|8|lurus, langsung, segera|-|チョク, ジキ|Arah|目|直接,ちょくせt,langsung;正直,しょうじき,jujur;垂直,すいちょk,vertikal;直す,なおす,memperbaiki;直角,ちょっかku,siku-siku;一直線,いっちょくせん,lurus
両|6|kedua, dua, pasangan|-|リョウ|Kuantitas|入|両方,りょうほう,keduanya;両国,りょうこk,u kedua negara;両手,りょうて,kedua tangan;両替,りょうがe,tukar uang;両側,りょうがわ,kedua sisi;両翼,りょうよく,kedua sayap
式|6|format, upacara, rumus|-|シKI|Formalitas|弋|公式,こうしき,rumus resmi;形式,けいしき,format;儀式,ぎしき,upacara;方式,ほうしき,metode;様式,ようしき,gaya;結婚式,けっこんしき,pernikahan
確|15|pasti, teguh, akurat|-|カク, コウ|Kepastian|石|確認,かくにん,konfirmasi;確定,かくてい,pastikan;正確,せいかく,akurat;確保,かくほ,amankan;断定,だんてい (contoh: 確);堅固,けんご (contoh: 確)
果|8|buah, hasil, akhir|は.てる, は.て|カ|Alam|木|結果,けっか,hasil;効果,こうか,efek;因果,いんが,sebab akibat;成果,せいか,prestasi;果物,くだもの,buah-buahan;結局,けっきょく, pada akhirnya
容|10|wadah, bentuk, toleransi|-|ヨウ|Toleransi|宀|容易,ようい,mudah;内容,ないよう,isi;容量,ようりyou,kapasitas;形容,けいよう,deskripsi;許容,きょよう,toleransi;容貌,ようぼう,penampilan fisik
必|5|harus, pasti, tak terhindarkan|-|ヒツ|Keharusan|心|必要,ひつよう,diperlukan;必須,ひっす,wajib;必ず,かならず,pasti;必然,ひっぜん,niscaya;必死,ひっし,mati-matian;必胜,ひっしょう,pasti menang
演|14|bermain peran, mendemonstrasikan, mengembangkan|-|エン|Pertunjukan|水|演じる,えんじる,memerankan;演技,えんぎ,akting;演奏,えんそう,memainkan musik;講演,こうえん,ceramah;実験,じっけん,eksperimen;演出,えんしゅつ,sutradara;上演,じょうえん,pementasan
歳|13|tahun usia, umur, tahun baru|ことし, とし|サイ|Waktu|止|年齢,ねんれi,usia;満歳,まんさい,umur penuh;歳末,さいまつ,akhir tahun;祝儀,しゅうぎ (contoh: 歳);年代,ねんだい (contoh: 歳);暦年,れきねん (contoh: 歳)
争|6|bertikai, bersaing, sengketa|あら.そう, いかでか|ソウ|Konflik|見|競争,きょうそう,kompetisi;戦争,せんそう,perang;紛争,ふんそう,konflik;主張,しゅちょう,klaim;争議,そうぎ,dispute;闘争,とうそう,perjuangan
談|15|percakapan, diskusi, cerita|-|ダン|Komunikasi|言|相談,そうだn,konsultasi;座談会,ざだんかい,seminar santai;対談,たいだn,dialog;談話,だんわ,percakapan;雑談,ざつだn,obrolan ringan;言論,げんろん,ucapan bebas
能|10|bisa, kemampuan, bakat|-|ノウ|Kemampuan|肉|能力,のうりょk,kemampuan;可能,かのう,mungkin;機能,きのう,fungsi;才能,さいのう,talenta;性能,せいのう,performa teknis;万能,ばんのう,serba bisa
位|7|posisi, derajat, tempat|くらい|イ|Hierarki|人|地位,ちい,posisi sosial;単位,たんい,satuan;上位,じょうい,atas/ranking tinggi;下位,かい (contoh: 位);順位,じゅんい,peringkat;位置,いち,lokasi
置|13|menempatkan, menyimpan, mengganti|お.く, お.かれる|チ|Aksi|罒|設置,せっち,pemasangan;配置,はいち,penempatan;位置,いち,lokasi;置き換,おきかえ,substitusi;処置,しょち,tindakan;放置,ほうち,membiarkan
流|6|mengalir, arus, cara|-|リュウ|Gerakan|水|流行,りゅうこう,tren;流れ,ながれ,arus;文化,ぶんか (contoh: 流);流動,りゅうどう,cair/bergerak;主流,しゅりu,arus utama;漂流,ひょうりu,terombang-ambing
格|10|standar, kelas, kotak|-|カク, コウ, キョウ|Standar|木|価格,かかk,u harga;規格,きかk,u standar;性格,せいかk,u karakter;格式,かくしki,formalitas;階級,かいきゅう (contoh: 格);体格,たいかk,u perawakan
疑|14|mencurigakan, tidak percaya, ragu|うた.がる|ギ|Kognisi|疋|疑問,ぎもん,keraguan;嫌疑,けんい,kecurigaan;疑惑,ぎわく,ragu;推測,すいそく (contoh: 疑);不信,ふしn (contoh: 疑);質問,しつもん (contoh: 疑)
過|12|melewati, berlebihan, kesalahan|すぎ.る, あやまち|カ|Perjalanan|辵|過去,かこ,masa lalu;通過,つうか,melewati;超過,ちょうか,kelebihan;失敗,しっぱい (contoh: 過);過程,かてi,proses;過度,かど,berlebihan
局|7|bureau, kantor, posisi, babak|-|キョク|Institusi|尸|局面,きょくめん,situasi;当局,とうきょk,u pihak berwenang;郵便局,ゆうびんきょk,u kantor pos;政局,せいきょk,u politik;機構,きこう (contoh: 局);部門,ぶもん (contoh: 局)
放|8|melepaskan, membuka, mengusir|はな.つ, はな.れる|ホウ|Aksi|攴|自由,じゆう,kebebasan;解放,かいほう,pembebasan;放送,ほうそう,penyiaran;放棄,ほうき,penyerahan;開放,かいほう,pembukaan;放出,ほうしuts,peluruhan
常|11|biasa, tetap, konstan|つね, とこ|ジョウ|Frekuensi|巾|通常,つうじou,normal;经常,けいじou,sering;異常,いじou,aneh;常識,じょうしki,common sense;日常,にちじou,harian;恒久,こうきゅう (contoh: 常)
状|7|bentuk, kondisi, surat|さま|ジョウ|Deskripsi|丬|状態,じょうたい,kondisi;形状,けいじou,bentuk;文章,ぶんしょう,kalimat;症状,しょうじou,gejala penyakit;図面,ずめん (contoh: 状);書類,しょるい (contoh: 状)
球|11|bola, dunia, bola bumi|たま|キュウ|Olahraga|玉|野球,やきu,baseball;地球,ちきyu,dunia;サッカー,さっかー (contoh: 球);ボール,ぼーる (contoh: 球);眼球,がんきyu,eyeball;銀河系,ぎんがけい (contoh: 球)
職|11|pekerjaan, tugas, posisi|-|ショク|Karir|耳|職業,しょくぎou,profesi;職場,しょくば,tempat kerja;職務,しょくむ,tugas;失業,しつgyou,pengangguran;技術,ぎじutsu (contoh: 職);会社,かいしゃ (contoh: 職)
与|5|memberikan, ikut serta, persahabatan|あた.える, あずか.る|ヨ|Interaksi|臼|参与,さんよ,partisipasi;関係,かんけi (contoh: 与);賞与,しょうよ,bonus;交付,こうふ,penyerahan;同盟,どうめい (contoh: 与);提供,ていきou,penyediaan
供|8|menyajikan, menyediakan, tawar-menawar|ともな.う|キョウ, ク|Penyajian|人|提供,ていきou,penyediaan;供給,きょうきyu,suplai;供物,くぶつ,persembahan;共犯,きょうはん (contoh: 供);貢献,こうけん,kontribusi;供給,きょうきyu (contoh: 供)
役|7|peran, posisi, pelayanan|やく, やくすむ|ヤク|Tanggung Jawab|殳|役割,やくわり,peran;俳優,はいyu,aktor;役員,やくいん,pejabat;公務員,こうむいん,pegawai negeri;主役,しゅやく,peran utama;役所,やくじo,kantor pemerintah
構|12|struktur, membangun, mengkhawatirkan|かま.える|コウ|Struktur|木|構造,こうぞu,struktur;建設,けんせts (contoh: 構);検討,けんとう,pertimbangan;構想,こうそう,konsep;建築,けんちk,u bangunan;枠組み,わくぐみ (contoh: 構)
割|12|membagi, pecah, diskon|わ.れる, わ.く|カツ|Matematika|刀|割合,わりあい,rasio;分割,ぶんかつ,partisi;割引,わりびき,diskon;分裂,ぶんれts,perpecahan;割り勘,わりかん,patungan;破壊,はかい (contoh: 割)
費|12|biaya, pengeluaran, habis|つぶ.やす|ヒ|Ekonomi|貝|費用,ひよう,biaya;経費,けいひ,pengeluaran;消費,しょうひ,konsumsi;予算,よさん (contoh: 費);コスト,こすと (contoh: 費);負担,ふたん (contoh: 費)
付|5|melekatkan, menempel, membayar|つ.ける, つ.く|フ|Aksi|人|支払,しはら,pembayaran;付属,ふぞく,aksesori;付録,ふろく,lampiran;付け,つけ,tambahan;交付,こうふ,penyerahan;着手,ちゃくしu (contoh: 付)
由|5|alasannya, karena, dari|よし|ユウ|Alasan|田|理由,りyu,alasan;由来,ゆらい,asal-usul;自由,じゆう,kebebasan;由緒,ゆいしょ,sejarah;自由,じゆう (contoh: 由);原因,げんいin (contoh: 由)
説|14|teori, penjelasan, ceramah|-|セツ, ゼイ|Komunikasi|言|説明,せつめi,penjelasan;意見,いけん (contoh: 説);主張,しゅちょう (contoh: 説);小説,しょうせts,novel;説得,せっとk,persuasi;論説,ろんせts,editorial
難|18|sulit, bencana, susah|むず.かしい, かた.い|ナン|Kesulitan|隹|難しい,むずかしい,sulit;困難,こんなん,kesulitan;災害,さいがい (contoh: 難);批判,ひはん (contoh: 難);難点,なんてん,kekurangan;難民,なんみin,pengungsi
優|17|superior, lembut, aktor|やさ.しい, ゆう.れる|ユウ|Kualitas|人|優秀,ゆうすu,berbakat;優先,ゆうせん,prioritas;優遇,ゆうぐu,perlakuan khusus;女優,じょyu,aktris;温柔,おんじyu (contoh: 優);優勢,ゆうせ,i,unggul
夫|4|suami, pria, petani|おっと, それ|フ, フウ|Keluarga|大|夫婦,ふうふ,suami istri;夫人,ふじん,istri orang terhormat;農夫,のうふ,petani;夫唱婦随,ふしょうふずい,suami istri seia sekata;男子,だんし (contoh: 夫);主人,しゅじん (contoh: 夫)
収|4|mengumpulkan, menerima, menutup|おさ.める, おさ.まる|シュウ|Uang|入|収入,しゅうにyu,penghasilan;回収,かいしyu,pengumpulan;収納,しゅうのu,penyimpanan;収支,しゅうし,neraca;集金,しゅうきん (contoh: 収);収穫,しゅうかく,panen
断|12|memutus, memutuskan, menolak|た.つ, こと.わる|ダン|Keputusan|斤|決定,けってい (contoh: 断);切断,せつだn,pemotongan;判断,はんだn (contoh: 断);禁止,きんし (contoh: 断);断絶,だんぜt,u,terputus;診断,しんだn,diagnosis
石|5|batu, mineral, batu bara|-|セキ, シャク|Material|石|石油,せきyu,minyak bumi;石灰,せっかい,kapur;岩石,がんせk,u,batu;宝石,ほうせk,u,batu permata;石器,せっき,u,alat batu;化石,かせk,u,fosil
違|7|berbeda, salah, melanggar|ちが.う, たが.う|イ|Perbedaan|辵|違い,ちがい,perbedaan;違反,いはn,pelanggaran;誤解,ごかい (contoh: 違);相違,そうい,perbedaan;間違い,まちがい,kesalahan;遠隔,えんかく (contoh: 違)
消|7|memadamkan, hilang, menghapus|き.える, け.す|ショU|Negasi|水|消防,しょうぼう,pemadam kebakaran;消失,しょうしt,u,hilang;消去,しょうきy,o,penghapusan;消化,しょうか,pencernaan;消息,しょうそk,u,berita;照明,しょうめい (contoh: 消)
神|10|dewa, Tuhan, pikiran|かん, こう|ジン|Agama|示|神社,じんじゃ,kuil shinto;精神,せいしin,mental/spirit;神話,しんわ,miteologi;神秘,しんぴ,misteri;信仰,しんこう,iman;宗教,しゅうきy,u (contoh: 神)
番|12|nomor, giliran, shift|つが.い|バン|Urutan|田|番号,ばんごう,nomor;順番,じゅんばん,urutan;晩飯,ばんめし (contoh: 番);番地,ばんち,nomor rumah;一番,いちばん,terbaik/no.1;当番,とうばん,piket
規|11|aturan, norma, rencana|-|キ|Standar|見|規則,きそk,u,aturan;規定,きてi,regulasi;規範,きはん,standar moral;規模,きも,skala;法規,ほうき (contoh: 規);計画,けいかk,u (contoh: 規)
術|11|seni, teknik, sihir|-|ジュツ|Keahlian|行|技術,ぎじutsu,teknik;芸術,げいjutsu,seni;手術,しゅjutsu,operasi;武术,ぶjutsu,bela diri;学術,がk,jutsu,ilmiah;方法,ほうほう (contoh: 術)
備|12|mempersiapkan, perlengkapan|そなえる,そなわる|ビ|Persiapan dan Perlengkapan|亻|準備,じゅんび,persiapan;設備,せつび,fasilitas;備品,びひん,perlengkapan;備える,そなえる,mempersiapkan;予備,よび,cadangan
宅|6|rumah, tempat tinggal| - |タク|Tempat Tinggal dan Bangunan|宀|自宅,じたく,rumah sendiri;住宅,じゅうたく,perumahan;宅配,たくはい,pengiriman ke rumah;帰宅,きたく,pulang ke rumah;お宅,おたく,rumah Anda
害|10|bahaya, kerugian| - |ガイ|Bahaya dan Keadaan|宀|害,がい,bahaya atau kerugian;被害,ひがい,kerugian atau korban;公害,こうがい,pencemaran lingkungan;害虫,がいちゅう,hama;災害,さいがい,bencana
配|10|membagikan, mengatur, mengirim|くばる|ハイ|Pekerjaan dan Distribusi|酉|配る,くばる,membagikan;心配,しんぱい,khawatir;配達,はいたつ,pengantaran;配偶者,はいぐうしゃ,pasangan hidup;支配,しはい,kekuasaan atau kendali
警|19|memperingatkan, waspada| - |ケイ|Keamanan dan Masyarakat|言|警察,けいさつ,polisi;警官,けいかん,polisi;警告,けいこく,peringatan;警備,けいび,penjagaan keamanan;警報,けいほう,peringatan bahaya
育|8|mendidik, membesarkan, tumbuh|そだつ,そだてる,はぐくむ|イク|Pendidikan dan Pertumbuhan|肉|育つ,そだつ,tumbuh;育てる,そだてる,membesarkan;教育,きょういく,pendidikan;体育,たいいく,pendidikan jasmani;育児,いくじ,pengasuhan anak
席|10|tempat duduk, kursi|むしろ|セキ|Tempat dan Posisi|巾|席,せき,tempat duduk;座席,ざせき,kursi atau tempat duduk;出席,しゅっせき,kehadiran;欠席,けっせき,ketidakhadiran;自由席,じゆうせき,kursi bebas
訪|11|mengunjungi|おとずれる,たずねる|ホウ|Perjalanan dan Hubungan Sosial|言|訪問,ほうもん,kunjungan;訪れる,おとずれる,mengunjungi;訪ねる,たずねる,mengunjungi;来訪,らいほう,kedatangan tamu;訪日,ほうにち,kunjungan ke Jepang
乗|9|naik, menumpang|のる,のせる|ジョウ|Transportasi dan Pergerakan|丿|乗る,のる,naik kendaraan;乗せる,のせる,menaikkan atau memboncengkan;乗車,じょうしゃ,naik kendaraan;乗客,じょうきゃく,penumpang;乗り物,のりもの,kendaraan
残|10|tersisa, meninggalkan|のこる,のこす|ザン|Keadaan dan Jumlah|歹|残る,のこる,tersisa;残す,のこす,meninggalkan;残念,ざんねん,mengecewakan;残業,ざんぎょう,lembur;残高,ざんだか,saldo
想|13|pikiran, bayangan, perasaan|おもう|ソウ,ソ|Pikiran dan Perasaan|心|想像,そうぞう,imajinasi;感想,かんそう,kesan;思想,しそう,pemikiran atau ideologi;予想,よそう,perkiraan;理想,りそう,ideal
声|7|suara|こえ,こわ|セイ,ショウ|Komunikasi dan Pancaindra|士|声,こえ,suara;声優,せいゆう,pengisi suara;大声,おおごえ,suara keras;音声,おんせい,suara;歌声,うたごえ,suara nyanyian
念|8|pikiran, niat, perhatian| - |ネン|Pikiran dan Perasaan|心|記念,きねん,peringatan;残念,ざんねん,mengecewakan;念願,ねんがん,keinginan yang lama diharapkan;理念,りねん,prinsip atau filosofi;念のため,ねんのため,untuk berjaga-jaga
助|7|membantu, menolong|たすける,たすかる,すける|ジョ|Hubungan Sosial dan Aktivitas|力|助ける,たすける,menolong;助かる,たすかる,tertolong;助手,じょしゅ,asisten;援助,えんじょ,bantuan;助言,じょげん,nasihat
労|7|kerja keras, tenaga|いたわる,ねぎらう|ロウ|Pekerjaan dan Aktivitas|力|労働,ろうどう,pekerjaan;苦労,くろう,kesulitan atau kerja keras;労力,ろうりょく,tenaga;疲労,ひろう,kelelahan;労働者,ろうどうしゃ,pekerja
例|8|contoh, kebiasaan|たとえる|レイ|Pendidikan dan Pengetahuan|亻|例,れい,contoh;例えば,たとえば,misalnya;例文,れいぶん,contoh kalimat;例外,れいがい,pengecualian;実例,じつれい,contoh nyata
然|12|demikian, keadaan alami| - |ゼン,ネン|Keadaan dan Sifat|灬|自然,しぜん,alam;当然,とうぜん,tentu saja;全然,ぜんぜん,sama sekali;突然,とつぜん,tiba-tiba;必然,ひつぜん,keniscayaan
限|9|batas, membatasi|かぎる,かぎり|ゲン|Batas dan Jumlah|阜|限る,かぎる,membatasi;限界,げんかい,batas kemampuan;期限,きげん,batas waktu;制限,せいげん,pembatasan;無限,むげん,tanpa batas
追|9|mengejar, mengikuti|おう|ツイ|Pergerakan dan Aktivitas|辶|追う,おう,mengejar;追いかける,おいかける,mengejar;追跡,ついせき,pelacakan;追放,ついほう,pengusiran;追加,ついか,penambahan
商|11|perdagangan, bisnis|あきなう|ショウ|Ekonomi dan Perdagangan|口|商売,しょうばい,perdagangan;商品,しょうひん,produk;商店,しょうてん,toko;商業,しょうぎょう,perdagangan;商社,しょうしゃ,perusahaan dagang
葉|12|daun|は|ヨウ|Alam dan Tumbuhan|艹|葉,は,daun;言葉,ことば,kata atau bahasa;葉書,はがき,kartu pos;紅葉,こうよう,daun yang berubah warna pada musim gugur;木の葉,このは,daun pohon
伝|6|menyampaikan, mewariskan|つたえる,つたわる,つたう|デン|Komunikasi dan Hubungan Sosial|亻|伝える,つたえる,menyampaikan;伝わる,つたわる,tersampaikan;伝言,でんごん,pesan titipan;伝統,でんとう,tradisi;手伝う,てつだう,membantu
働|13|bekerja|はたらく|ドウ|Pekerjaan dan Aktivitas|亻|働く,はたらく,bekerja;労働,ろうどう,pekerjaan;働き,はたらき,fungsi atau pekerjaan;共働き,ともばたらき,suami istri sama-sama bekerja;働き者,はたらきもの,orang yang rajin bekerja
形|7|bentuk, wujud|かたち,かた,かたどる|ケイ,ギョウ|Bentuk dan Penampilan|彡|形,かたち,bentuk;人形,にんぎょう,boneka;形式,けいしき,format;図形,ずけい,bentuk geometris;形容詞,けいようし,kata sifat
景|12|pemandangan, keadaan| - |ケイ|Alam dan Lingkungan|日|景色,けしき,pemandangan;景気,けいき,kondisi ekonomi;風景,ふうけい,pemandangan;背景,はいけい,latar belakang;光景,こうけい,pemandangan atau situasi
落|12|jatuh, turun|おちる,おとす|ラク|Pergerakan dan Keadaan|艹|落ちる,おちる,jatuh;落とす,おとす,menjatuhkan;落第,らくだい,gagal ujian;落書き,らくがき,coretan;落ち着く,おちつく,menjadi tenang
好|6|suka, baik|このむ,すく|コウ|Perasaan dan Sifat|女|好き,すき,suka;好む,このむ,menyukai;好物,こうぶつ,makanan kesukaan;好意,こうい,niat baik;大好き,だいすき,sangat suka
退|9|mundur, berhenti, mengundurkan diri|しりぞく,しりぞける|タイ|Pergerakan dan Pekerjaan|辶|退く,しりぞく,mundur;退院,たいいん,keluar dari rumah sakit;退学,たいがく,keluar sekolah;退職,たいしょく,pensiun atau berhenti bekerja;退屈,たいくつ,bosan
頭|16|kepala, bagian depan|あたま,かしら|トウ,ズ,ト|Tubuh dan Bagian Tubuh|頁|頭,あたま,kepala;頭痛,ずつう,sakit kepala;先頭,せんとう,barisan paling depan;頭脳,ずのう,otak;頭文字,かしらもじ,huruf awal
負|9|kalah, menanggung|まける,まかす,おう|フ|Kompetisi dan Tanggung Jawab|貝|負ける,まける,kalah;負う,おう,menanggung;勝負,しょうぶ,pertandingan atau persaingan;負担,ふたん,beban;負傷,ふしょう,luka
渡|12|menyeberang, menyerahkan|わたる,わたす|ト|Pergerakan dan Hubungan Sosial|氵|渡る,わたる,menyeberang;渡す,わたす,menyerahkan;渡航,とこう,perjalanan ke luar negeri;渡米,とべい,pergi ke Amerika;引き渡す,ひきわたす,menyerahkan
失|5|kehilangan, gagal|うしなう,うせる|シツ|Keadaan dan Aktivitas|大|失う,うしなう,kehilangan;失敗,しっぱい,kegagalan;失礼,しつれい,tidak sopan atau permisi;失業,しつぎょう,pengangguran;紛失,ふんしつ,kehilangan barang
差|10|perbedaan, selisih|さす|サ|Perbandingan dan Ukuran|工|差,さ,perbedaan;差別,さべつ,diskriminasi;差額,さがく,selisih jumlah;差し出す,さしだす,menyerahkan;時差,じさ,perbedaan waktu
末|5|akhir, ujung|すえ|マツ,バツ|Waktu dan Posisi|木|末,すえ,akhir;週末,しゅうまつ,akhir pekan;月末,げつまつ,akhir bulan;年末,ねんまつ,akhir tahun;末日,まつじつ,hari terakhir
守|6|menjaga, melindungi|まもる,もり|シュ,ス|Keamanan dan Tanggung Jawab|宀|守る,まもる,menjaga;留守,るす,tidak berada di rumah;守備,しゅび,pertahanan;保守,ほしゅ,pemeliharaan atau konservatisme;守衛,しゅえい,petugas keamanan
若|8|muda|わかい,もしくは|ジャク,ニャク|Usia dan Sifat|艹|若い,わかい,muda;若者,わかもの,anak muda;若者文化,わかものぶんか,budaya anak muda;若干,じゃっかん,sedikit;若葉,わかば,daun muda
種|14|jenis, benih|たね|シュ|Alam dan Klasifikasi|禾|種,たね,benih;種類,しゅるい,jenis;種族,しゅぞく,kelompok atau suku;人種,じんしゅ,ras manusia;種目,しゅもく,cabang atau kategori
美|9|indah, cantik|うつくしい|ビ,ミ|Keindahan dan Sifat|羊|美しい,うつくしい,indah;美人,びじん,orang cantik;美容,びよう,kecantikan;美術,びじゅつ,seni rupa;美術館,びじゅつかん,museum seni
命|8|kehidupan, perintah|いのち|メイ,ミョウ|Kehidupan dan Manusia|口|命,いのち,nyawa;生命,せいめい,kehidupan;命令,めいれい,perintah;運命,うんめい,nasib;寿命,じゅみょう,usia atau masa hidup
福|13|keberuntungan, kebahagiaan| - |フク|Kebahagiaan dan Keadaan|示|幸福,こうふく,kebahagiaan;福祉,ふくし,kesejahteraan sosial;福袋,ふくぶくろ,kantong keberuntungan;祝福,しゅくふく,berkat;福岡,ふくおか,Fukuoka
望|11|harapan, keinginan, memandang|のぞむ,もち|ボウ,モウ|Harapan dan Perasaan|月|希望,きぼう,harapan;望む,のぞむ,mengharapkan;望遠鏡,ぼうえんきょう,teleskop;願望,がんぼう,keinginan;絶望,ぜつぼう,keputusasaan
非|8|bukan, tidak, kesalahan| - |ヒ|Penilaian dan Keadaan|非|非常,ひじょう,darurat atau luar biasa;非常口,ひじょうぐち,pintu darurat;非公開,ひこうかい,tidak dipublikasikan;非難,ひなん,kritik atau kecaman;是非,ぜひ,bagaimanapun juga
観|18|melihat, pandangan|みる|カン|Pancaindra dan Pemikiran|見|観光,かんこう,wisata;観察,かんさつ,pengamatan;観客,かんきゃく,penonton;観念,かんねん,konsep atau gagasan;外観,がいかん,tampilan luar
察|14|mengamati, memahami| - |サツ|Pemikiran dan Pengamatan|宀|警察,けいさつ,polisi;観察,かんさつ,pengamatan;察する,さっする,memahami atau menduga;診察,しんさつ,pemeriksaan medis;考察,こうさつ,pertimbangan atau analisis
段|9|tahap, tingkat| - |ダン|Urutan dan Tingkatan|殳|段階,だんかい,tahap;階段,かいだん,tangga;値段,ねだん,harga;手段,しゅだん,cara atau metode;段落,だんらく,paragraf
横|15|samping, horizontal|よこ|オウ|Posisi dan Arah|木|横,よこ,samping;横断歩道,おうだんほどう,penyeberangan pejalan kaki;横顔,よこがお,wajah dari samping;横浜,よこはま,Yokohama;横書き,よこがき,tulisan horizontal
深|11|dalam|ふかい,ふかまる,ふかめる|シン|Ukuran dan Keadaan|氵|深い,ふかい,dalam;深夜,しんや,tengah malam;深刻,しんこく,serius;深呼吸,しんこきゅう,menarik napas dalam;深まる,ふかまる,semakin mendalam
申|5|mengatakan dengan hormat, mengajukan|もうす|シン|Komunikasi dan Administrasi|田|申す,もうす,berkata (bentuk rendah hati);申請,しんせい,permohonan resmi;申し込み,もうしこみ,pendaftaran;申告,しんこく,pelaporan;申込書,もうしこみしょ,formulir pendaftaran
様|14|bentuk, keadaan, Tuan/Nyonya|さま|ヨウ|Kesopanan dan Keadaan|木|様子,ようす,keadaan;様々,さまざま,bermacam-macam;お客様,おきゃくさま,tamu atau pelanggan;神様,かみさま,dewa;皆様,みなさま,Anda sekalian
財|10|harta, kekayaan| - |ザイ,サイ|Ekonomi dan Keuangan|貝|財産,ざいさん,harta kekayaan;財務,ざいむ,keuangan;財政,ざいせい,keuangan negara;文化財,ぶんかざい,cagar budaya;財団,ざいだん,yayasan
港|12|pelabuhan|みなと|コウ|Transportasi dan Geografi|氵|港,みなと,pelabuhan;空港,くうこう,bandara;港町,みなとまち,kota pelabuhan;港湾,こうわん,pelabuhan;漁港,ぎょこう,pelabuhan perikanan
識|19|pengetahuan, mengenali| - |シキ|Pengetahuan dan Pemikiran|言|知識,ちしき,pengetahuan;意識,いしき,kesadaran;認識,にんしき,pengenalan atau pemahaman;常識,じょうしき,akal sehat;標識,ひょうしき,rambu atau tanda
呼|8|memanggil, bernapas|よぶ|コ|Komunikasi dan Aktivitas|口|呼ぶ,よぶ,memanggil;呼吸,こきゅう,pernapasan;呼び出す,よびだす,memanggil keluar;呼び方,よびかた,cara memanggil;呼び声,よびごえ,suara panggilan
達|12|mencapai, jamak orang| - |タツ,ダ|Hubungan Sosial dan Pencapaian|辶|友達,ともだち,teman;私達,わたしたち,kami;子供達,こどもたち,anak-anak;到達,とうたつ,pencapaian;達成,たっせい,pencapaian atau keberhasilan
良|7|baik, bagus|よい,いい|リョウ|Sifat dan Penilaian|艮|良い,よい,baik;良く,よく,dengan baik;良好,りょうこう,baik atau bagus;不良,ふりょう,buruk;改良,かいりょう,perbaikan
候|10|iklim, keadaan, menunggu|そうろう|コウ|Cuaca dan Keadaan|亻|気候,きこう,iklim;候補,こうほ,kandidat;候補者,こうほしゃ,calon;天候,てんこう,kondisi cuaca;症候群,しょうこうぐん,sindrom
程|12|tingkat, kadar, batas|ほど|テイ|Ukuran dan Tingkatan|禾|程度,ていど,tingkat atau kadar;日程,にってい,jadwal;課程,かてい,kurikulum;過程,かてい,proses;先程,さきほど,beberapa saat yang lalu
満|12|penuh, memuaskan|みちる,みたす|マン|Jumlah dan Keadaan|氵|満足,まんぞく,kepuasan;満員,まんいん,penuh sesak;満点,まんてん,nilai sempurna;満月,まんげつ,bulan purnama;満たす,みたす,memenuhi
敗|11|kalah, kegagalan|やぶれる|ハイ|Kompetisi dan Hasil|貝|失敗,しっぱい,kegagalan;敗北,はいぼく,kekalahan;勝敗,しょうはい,menang dan kalah;敗者,はいしゃ,pihak yang kalah;連敗,れんぱい,kekalahan beruntun
値|10|harga, nilai|ね,あたい|チ|Ekonomi dan Ukuran|亻|値段,ねだん,harga;価値,かち,nilai;値上げ,ねあげ,kenaikan harga;値下げ,ねさげ,penurunan harga;数値,すうち,nilai numerik
突|8|menusuk, menerjang, tiba-tiba|つく|トツ,カ|Pergerakan dan Tindakan|穴|突然,とつぜん,tiba-tiba;突く,つく,menusuk;衝突,しょうとつ,tubrukan;突破,とっぱ,terobosan;突入,とつにゅう,menyerbu atau memasuki secara paksa
光|6|cahaya, bersinar|ひかる,ひかり|コウ|Alam dan Cahaya|儿|光,ひかり,cahaya;光る,ひかる,bersinar;日光,にっこう,cahaya matahari;観光,かんこう,wisata;電光,でんこう,cahaya listrik
路|13|jalan, rute|じ|ロ,ル|Transportasi dan Arah|足|道路,どうろ,jalan raya;線路,せんろ,rel kereta;通路,つうろ,jalur atau lorong;路地,ろじ,gang;帰路,きろ,perjalanan pulang
科|9|jurusan, bidang ilmu| - |カ|Pendidikan dan Ilmu Pengetahuan|禾|科学,かがく,ilmu pengetahuan;科目,かもく,mata pelajaran;学科,がっか,jurusan;外科,げか,bedah;内科,ないか,penyakit dalam
積|16|menumpuk, mengumpulkan|つむ,つもる|セキ|Jumlah dan Aktivitas|禾|積む,つむ,menumpuk;積もる,つもる,menumpuk atau terakumulasi;面積,めんせき,luas permukaan;積極的,せっきょくてき,aktif atau proaktif;体積,たいせき,volume
他|5|lain, berbeda|ほか|タ|Perbandingan dan Hubungan|亻|他,ほか,yang lain;他人,たにん,orang lain;他国,たこく,negara lain;他社,たしゃ,perusahaan lain;その他,そのほか,selain itu
処|5|tempat, menangani|ところ,おる|ショ|Tempat dan Tindakan|几|処理,しょり,pemrosesan;処分,しょぶん,pembuangan atau hukuman;処置,しょち,penanganan;処方,しょほう,resep;対処,たいしょ,penanganan masalah
太|4|tebal, gemuk, besar|ふとい,ふとる|タイ,タ|Ukuran dan Sifat|大|太い,ふとい,tebal;太る,ふとる,menjadi gemuk;太陽,たいよう,matahari;太鼓,たいこ,gendang Jepang;太字,ふとじ,huruf tebal
客|9|tamu, pelanggan| - |キャク,カク|Hubungan Sosial dan Perdagangan|宀|客,きゃく,tamu;お客様,おきゃくさま,pelanggan;乗客,じょうきゃく,penumpang;観客,かんきゃく,penonton;客室,きゃくしつ,kamar tamu
否|7|tidak, penolakan|いな|ヒ|Penilaian dan Komunikasi|口|否定,ひてい,penyangkalan;否認,ひにん,penyangkalan;賛否,さんぴ,pro dan kontra;否決,ひけつ,penolakan dalam pemungutan suara;可否,かひ,boleh atau tidak
師|10|guru, ahli, pemimpin| - |シ|Pendidikan dan Profesi|巾|教師,きょうし,guru;医師,いし,dokter;講師,こうし,pengajar atau dosen;師匠,ししょう,guru atau master;看護師,かんごし,perawat
登|12|naik, mendaki|のぼる|トウ,ト,ドウ|Pergerakan dan Aktivitas|癶|登る,のぼる,mendaki;登山,とざん,mendaki gunung;登場,とうじょう,kemunculan;登録,とうろく,pendaftaran;登校,とうこう,pergi ke sekolah
易|8|mudah, berubah|やさしい,やすい|エキ,イ|Sifat dan Keadaan|日|簡単,かんたん,mudah atau sederhana;容易,ようい,mudah;貿易,ぼうえき,perdagangan internasional;易しい,やさしい,mudah;安易,あんい,terlalu mudah atau gegabah
速|10|cepat|はやい,はやめる,すみやか|ソク|Kecepatan dan Pergerakan|辶|速い,はやい,cepat;速度,そくど,kecepatan;高速,こうそく,kecepatan tinggi;速達,そくたつ,pengiriman ekspres;早速,さっそく,segera
存|6|ada, eksis, mengetahui| - |ソン,ゾン|Keberadaan dan Pengetahuan|子|存在,そんざい,keberadaan;保存,ほぞん,penyimpanan;存じる,ぞんじる,mengetahui (bentuk hormat);生存,せいぞん,kelangsungan hidup;存続,そんぞく,kelangsungan
飛|9|terbang|とぶ,とばす|ヒ|Pergerakan dan Alam|飛|飛ぶ,とぶ,terbang;飛行機,ひこうき,pesawat;飛行,ひこう,penerbangan;飛び出す,とびだす,meloncat keluar;飛び込む,とびこむ,melompat masuk
殺|10|membunuh, mematikan|ころす,そぐ|サツ,サイ,セツ|Tindakan dan Keadaan|殳|殺す,ころす,membunuh;殺人,さつじん,pembunuhan;殺到,さっとう,berbondong-bondong menyerbu;自殺,じさつ,bunuh diri;殺菌,さっきん,sterilisasi
号|5|nomor, tanda, edisi|さけぶ|ゴウ|Nomor dan Identitas|口|番号,ばんごう,nomor;記号,きごう,simbol;信号,しんごう,lampu lalu lintas;号室,ごうしつ,nomor kamar;号外,ごうがい,edisi khusus
単|9|sederhana, tunggal|ひとえ|タン|Jumlah dan Klasifikasi|十|単語,たんご,kosakata;単位,たんい,satuan;単純,たんじゅん,sederhana;単独,たんどく,sendirian;簡単,かんたん,mudah
座|10|duduk, tempat duduk|すわる|ザ|Posisi dan Aktivitas|广|座る,すわる,duduk;座席,ざせき,tempat duduk;星座,せいざ,zodiak atau rasi bintang;口座,こうざ,rekening;座談会,ざだんかい,diskusi santai
破|10|merusak, memecahkan|やぶる,やぶれる|ハ|Tindakan dan Keadaan|石|破る,やぶる,merobek atau melanggar;破れる,やぶれる,robek;破壊,はかい,kehancuran;突破,とっぱ,terobosan;破産,はさん,kebangkrutan
除|10|menghapus, menghilangkan|のぞく|ジョ,ジ|Tindakan dan Keadaan|阜|除く,のぞく,menghilangkan atau mengecualikan;掃除,そうじ,bersih-bersih;除外,じょがい,pengecualian;削除,さくじょ,penghapusan;解除,かいじょ,pembatalan
完|7|selesai, lengkap| - |カン|Penyelesaian dan Keadaan|宀|完成,かんせい,penyelesaian;完全,かんぜん,sempurna;完了,かんりょう,selesai;完璧,かんぺき,sempurna;未完成,みかんせい,belum selesai
降|10|turun, jatuh|おりる,おろす,ふる|コウ,ゴ|Pergerakan dan Cuaca|阜|降りる,おりる,turun dari kendaraan;降ろす,おろす,menurunkan;降る,ふる,turun (hujan atau salju);下降,かこう,penurunan;以降,いこう,setelah
責|11|tanggung jawab, menyalahkan|せめる|セキ|Tanggung Jawab dan Penilaian|貝|責任,せきにん,tanggung jawab;責める,せめる,menyalahkan;責任者,せきにんしゃ,penanggung jawab;自責,じせき,menyalahkan diri sendiri;無責任,むせきにん,tidak bertanggung jawab
捕|10|menangkap|とらえる,とらわれる,つかまえる,つかまる|ホ|Tindakan dan Keamanan|扌|捕まえる,つかまえる,menangkap;捕まる,つかまる,tertangkap;捕る,とる,menangkap;逮捕,たいほ,penangkapan;捕獲,ほかく,penangkapan hewan
危|6|bahaya, berbahaya|あぶない,あやうい,あやぶむ|キ|Keamanan dan Keadaan|卩|危ない,あぶない,berbahaya;危険,きけん,bahaya;危機,きき,krisis;危害,きがい,bahaya atau kerugian;危うい,あやうい,berisiko
給|12|memberi, menyediakan, gaji|たまう|キュウ|Pekerjaan dan Keuangan|糸|給料,きゅうりょう,gaji;給食,きゅうしょく,makan siang sekolah;給水,きゅうすい,pasokan air;給与,きゅうよ,upah atau gaji;支給,しきゅう,pemberian atau pembayaran
苦|8|pahit, menderita, sulit|くるしい,くるしむ,くるしめる,にがい,にがる|ク|Perasaan dan Keadaan|艹|苦しい,くるしい,menderita;苦手,にがて,tidak mahir atau tidak suka;苦労,くろう,kesulitan;苦情,くじょう,keluhan;苦い,にがい,pahit
迎|7|menyambut, menjemput|むかえる|ゲイ|Hubungan Sosial dan Pergerakan|辶|迎える,むかえる,menyambut;歓迎,かんげい,sambutan;迎え,むかえ,jemputan;出迎える,でむかえる,menjemput;迎春,げいしゅん,menyambut musim semi
園|13|taman, kebun|その|エン|Tempat dan Lingkungan|囗|公園,こうえん,taman umum;幼稚園,ようちえん,taman kanak-kanak;動物園,どうぶつえん,kebun binatang;植物園,しょくぶつえん,kebun botani;園芸,えんげい,hortikultura
具|8|alat, perlengkapan|そなえる,つぶさに|グ|Benda dan Perlengkapan|八|道具,どうぐ,alat;家具,かぐ,perabot;文房具,ぶんぼうぐ,alat tulis;具合,ぐあい,kondisi;具体的,ぐたいてき,konkret
辞|13|kata, mengundurkan diri, menolak|やめる|ジ|Bahasa dan Pekerjaan|辛|辞書,じしょ,kamus;辞める,やめる,berhenti;辞典,じてん,kamus;辞職,じしょく,mengundurkan diri;辞退,じたい,menolak tawaran
因|6|sebab, faktor|よる|イン|Sebab dan Akibat|囗|原因,げんいん,penyebab;要因,よういん,faktor utama;因果,いんが,sebab dan akibat;原因不明,げんいんふめい,penyebab tidak diketahui;敗因,はいいん,penyebab kekalahan
馬|10|kuda|うま,ま|バ|Hewan dan Transportasi|馬|馬,うま,kuda;馬車,ばしゃ,kereta kuda;競馬,けいば,balap kuda;馬肉,ばにく,daging kuda;子馬,こうま,anak kuda
愛|13|cinta, kasih sayang|いとしい,めでる|アイ|Perasaan dan Hubungan Sosial|心|愛,あい,cinta;愛情,あいじょう,kasih sayang;恋愛,れんあい,cinta romantis;愛する,あいする,mencintai;愛犬,あいけん,anjing kesayangan
富|12|kaya, kekayaan|とむ,とみ|フ,フウ|Ekonomi dan Keadaan|宀|富む,とむ,menjadi kaya;富士山,ふじさん,Gunung Fuji;豊富,ほうふ,melimpah;富豪,ふごう,orang kaya;富国,ふこく,negara makmur
彼|8|dia (laki-laki), pihak lain|かれ,かの|ヒ|Manusia dan Hubungan Sosial|彳|彼,かれ,dia laki-laki;彼女,かのじょ,dia perempuan atau pacar;彼氏,かれし,pacar laki-laki;彼ら,かれら,mereka;彼方,かなた,seberang atau tempat jauh
未|5|belum, masa depan|いまだ|ミ,ビ|Waktu dan Keadaan|木|未来,みらい,masa depan;未定,みてい,belum ditentukan;未完成,みかんせい,belum selesai;未成年,みせいねん,belum dewasa;未経験,みけいけん,belum berpengalaman
舞|15|menari|まう,まい|ブ|Seni dan Aktivitas|舛|舞う,まう,menari atau beterbangan;舞台,ぶたい,panggung;舞踊,ぶよう,tarian;歌舞伎,かぶき,kabuki;舞踏会,ぶとうかい,pesta dansa
亡|3|meninggal, hilang|ない,なくなる,なくす|ボウ,モウ|Kehidupan dan Kematian|亠|亡くなる,なくなる,meninggal;死亡,しぼう,kematian;亡命,ぼうめい,pengasingan politik;逃亡,とうぼう,pelarian;滅亡,めつぼう,kehancuran
冷|7|dingin|つめたい,ひえる,ひやす,ひやかす,さめる,さます|レイ|Suhu dan Keadaan|冫|冷たい,つめたい,dingin saat disentuh;冷える,ひえる,menjadi dingin;冷蔵庫,れいぞうこ,kulkas;冷静,れいせい,tenang;冷房,れいぼう,pendingin ruangan
適|14|cocok, sesuai|かなう|テキ|Kesesuaian dan Keadaan|辶|適切,てきせつ,tepat;適当,てきとう,sesuai atau sembarangan (tergantung konteks);適用,てきよう,penerapan;適応,てきおう,adaptasi;快適,かいてき,nyaman
婦|11|perempuan dewasa, istri|よめ|フ|Keluarga dan Manusia|女|主婦,しゅふ,ibu rumah tangga;婦人,ふじん,wanita dewasa;夫婦,ふうふ,suami istri;看護婦,かんごふ,perawat perempuan (istilah lama);産婦人科,さんふじんか,obstetri dan ginekologi
寄|11|mendekat, mampir, berkumpul|よる,よせる|キ|Pergerakan dan Hubungan Sosial|宀|寄る,よる,mampir atau mendekat;寄せる,よせる,mendekatkan;寄付,きふ,sumbangan;寄宿舎,きしゅくしゃ,asrama;年寄り,としより,orang lanjut usia
込|5|masuk, menjadi padat, memasukkan|こむ,こめる| - |Pergerakan dan Keadaan|辶|込む,こむ,menjadi ramai atau padat;申し込む,もうしこむ,mendaftar atau mengajukan;入り込む,はいりこむ,masuk ke dalam;思い込む,おもいこむ,beranggapan kuat;詰め込む,つめこむ,memasukkan hingga penuh
顔|18|wajah, muka|かお|ガン|Tubuh dan Penampilan|頁|顔,かお,wajah;笑顔,えがお,wajah tersenyum;洗顔,せんがん,mencuci muka;顔色,かおいろ,raut wajah;顔写真,かおじゃしん,foto wajah
類|18|jenis, golongan, sejenis|たぐい|ルイ|Klasifikasi dan Pengetahuan|頁|種類,しゅるい,jenis;人類,じんるい,umat manusia;分類,ぶんるい,klasifikasi;類似,るいじ,kemiripan;書類,しょるい,dokumen
余|7|sisa, lebih, saya (formal)|あまる,あます|ヨ|Jumlah dan Keadaan|人|余る,あまる,tersisa;余す,あます,menyisakan;余裕,よゆう,kelonggaran;余分,よぶん,kelebihan;余計,よけい,berlebihan
王|4|raja| - |オウ|Jabatan dan Kerajaan|玉|王,おう,raja;王様,おうさま,sang raja;女王,じょおう,ratu;王国,おうこく,kerajaan;王子,おうじ,pangeran
返|7|mengembalikan, membalas|かえす,かえる|ヘン|Tindakan dan Hubungan Sosial|辶|返す,かえす,mengembalikan;返る,かえる,kembali;返事,へんじ,jawaban;返信,へんしん,balasan pesan;返却,へんきゃく,pengembalian barang
妻|8|istri|つま|サイ|Keluarga dan Manusia|女|妻,つま,istri sendiri;夫妻,ふさい,suami istri;妻子,さいし,istri dan anak;愛妻,あいさい,istri tercinta;人妻,ひとづま,istri orang lain
背|9|punggung, tinggi badan, membelakangi|せ,せい,そむく,そむける|ハイ|Tubuh dan Posisi|肉|背中,せなか,punggung;背が高い,せがたかい,berbadan tinggi;背広,せびろ,setelan jas;背景,はいけい,latar belakang;背負う,せおう,memikul
熱|15|panas, demam, semangat|あつい|ネツ|Suhu dan Keadaan|灬|熱,ねつ,panas atau demam;熱い,あつい,panas;熱心,ねっしん,tekun atau antusias;熱中,ねっちゅう,terpikat atau asyik;発熱,はつねつ,demam
宿|11|penginapan, menginap|やど,やどる,やどす|シュク|Tempat dan Perjalanan|宀|宿,やど,penginapan;宿題,しゅくだい,pekerjaan rumah;宿泊,しゅくはく,menginap;下宿,げしゅく,indekos;宿屋,やどや,penginapan
薬|16|obat, obat-obatan|くすり|ヤク|Kesehatan dan Benda|艹|薬,くすり,obat;薬局,やっきょく,apotek;薬品,やくひん,bahan obat;薬指,くすりゆび,jari manis;目薬,めぐすり,obat tetes mata
険|11|curam, berbahaya|けわしい|ケン|Bahaya dan Keadaan|阜|危険,きけん,bahaya;保険,ほけん,asuransi;険しい,けわしい,terjal atau sulit;険悪,けんあく,buruk atau bermusuhan;冒険,ぼうけん,petualangan
頼|16|meminta, mengandalkan|たのむ,たのもしい,たよる|ライ|Hubungan Sosial dan Kepercayaan|頁|頼む,たのむ,meminta;頼る,たよる,mengandalkan;信頼,しんらい,kepercayaan;依頼,いらい,permintaan;頼もしい,たのもしい,dapat diandalkan
覚|12|mengingat, menyadari, bangun|おぼえる,さます,さめる|カク|Pikiran dan Ingatan|見|覚える,おぼえる,mengingat;目覚まし,めざまし,alarm;感覚,かんかく,perasaan atau indra;覚悟,かくご,tekad;自覚,じかく,kesadaran diri
船|11|kapal|ふね,ふな|セン|Transportasi dan Kendaraan|舟|船,ふね,kapal;船長,せんちょう,kapten kapal;船員,せんいん,awak kapal;風船,ふうせん,balon;造船,ぞうせん,pembuatan kapal
途|10|jalan, perjalanan, proses| - |ト|Perjalanan dan Proses|辶|途中,とちゅう,di tengah perjalanan;用途,ようと,kegunaan;途端,とたん,tepat setelah;帰途,きと,perjalanan pulang;前途,ぜんと,masa depan atau perjalanan ke depan
許|11|mengizinkan, memaafkan|ゆるす|キョ|Hubungan Sosial dan Aturan|言|許す,ゆるす,mengizinkan atau memaafkan;許可,きょか,izin;免許,めんきょ,lisensi;許可証,きょかしょう,surat izin;特許,とっきょ,hak paten
抜|7|mencabut, mengeluarkan, menonjol|ぬく,ぬける,ぬかす,ぬかる|バツ|Tindakan dan Pergerakan|扌|抜く,ぬく,mencabut;抜ける,ぬける,terlepas;抜群,ばつぐん,luar biasa;抜粋,ばっすい,kutipan pilihan;手抜き,てぬき,asal-asalan
便|9|kemudahan, kiriman, tinja|たより|ベン,ビン|Kehidupan dan Komunikasi|亻|便利,べんり,praktis;不便,ふべん,tidak praktis;郵便,ゆうびん,pos;便所,べんじょ,toilet;便り,たより,kabar atau surat
留|10|menahan, tinggal, menetap|とめる,とまる|リュウ,ル|Tempat dan Pergerakan|田|留学,りゅうがく,belajar di luar negeri;留守,るす,tidak berada di rumah;留学生,りゅうがくせい,pelajar asing;保留,ほりゅう,penundaan;留める,とめる,menahan atau memasang
罪|13|dosa, kejahatan|つみ|ザイ|Hukum dan Masyarakat|罒|罪,つみ,dosa atau kejahatan;犯罪,はんざい,kejahatan;罪人,ざいにん,orang berdosa atau penjahat;無罪,むざい,tidak bersalah;有罪,ゆうざい,bersalah
努|7|berusaha keras|つとめる|ド|Usaha dan Aktivitas|力|努力,どりょく,usaha keras;努める,つとめる,berusaha;努力家,どりょくか,orang yang tekun;努力目標,どりょくもくひょう,target usaha;不断の努力,ふだんのどりょく,usaha tanpa henti
精|14|semangat, murni, teliti| - |セイ,ショウ|Pikiran dan Keadaan|米|精神,せいしん,mental atau jiwa;精一杯,せいいっぱい,sekuat tenaga;精密,せいみつ,teliti atau presisi;精算,せいさん,penghitungan akhir;精力,せいりょく,energi atau stamina
散|12|menyebar, bubar|ちる,ちらす,ちらかす,ちらかる|サン|Pergerakan dan Keadaan|攵|散る,ちる,berguguran;散歩,さんぽ,jalan-jalan;散らす,ちらす,menyebarkan;解散,かいさん,pembubaran;散らかる,ちらかる,berantakan
静|14|tenang, diam|しずか,しずまる,しずめる|セイ,ジョウ|Perasaan dan Keadaan|青|静か,しずか,tenang;静かに,しずかに,dengan tenang;静止,せいし,diam atau berhenti;冷静,れいせい,tenang;静寂,せいじゃく,keheningan
婚|11|pernikahan| - |コン|Keluarga dan Hubungan Sosial|女|結婚,けっこん,pernikahan;婚約,こんやく,pertunangan;新婚,しんこん,pengantin baru;離婚,りこん,perceraian;婚姻,こんいん,perkawinan
喜|12|gembira, senang|よろこぶ,よろこばす|キ|Perasaan dan Emosi|口|喜ぶ,よろこぶ,bergembira;喜び,よろこび,kegembiraan;喜劇,きげき,komedi;歓喜,かんき,kegembiraan besar;喜ばしい,よろこばしい,menggembirakan
浮|10|mengapung, timbul|うく,うかぶ,うかべる,うかれる|フ|Alam dan Keadaan|氵|浮く,うく,mengapung;浮かぶ,うかぶ,timbul atau terlintas;浮かべる,うかべる,menampilkan atau membayangkan;浮気,うわき,berselingkuh;浮力,ふりょく,gaya apung
絶|12|memutuskan, sangat, habis|たえる,たやす,たつ|ゼツ|Keadaan dan Hubungan|糸|絶対,ぜったい,pasti atau mutlak;絶える,たえる,terputus atau punah;絶景,ぜっけい,pemandangan luar biasa;絶望,ぜつぼう,keputusasaan;絶滅,ぜつめつ,kepunahan
幸|8|bahagia, keberuntungan|さいわい,さち,しあわせ|コウ|Perasaan dan Keadaan|干|幸せ,しあわせ,kebahagiaan;幸福,こうふく,kebahagiaan;幸運,こううん,keberuntungan;不幸,ふこう,kemalangan;幸い,さいわい,untungnya
押|8|menekan, mendorong|おす,おさえる|オウ|Tindakan dan Aktivitas|扌|押す,おす,menekan;押さえる,おさえる,menahan;押し入れ,おしいれ,lemari penyimpanan;押印,おういん,membubuhkan cap;押し売り,おしうり,penjualan paksa
倒|10|jatuh, merobohkan|たおれる,たおす|トウ|Pergerakan dan Keadaan|亻|倒れる,たおれる,roboh;倒す,たおす,merobohkan;転倒,てんとう,jatuh terguling;面倒,めんどう,repot;倒産,とうさん,kebangkrutan
等|12|sama, dan lain-lain|ひとしい,など,ら|トウ|Persamaan dan Klasifikasi|竹|等しい,ひとしい,sama;平等,びょうどう,kesetaraan;等級,とうきゅう,tingkatan;一等,いっとう,peringkat pertama;等,など,dan lain-lain
老|6|tua, menua|おいる,ふける|ロウ|Usia dan Kehidupan|老|老人,ろうじん,orang lanjut usia;老後,ろうご,masa tua;老化,ろうか,penuaan;老舗,しにせ,toko lama yang mapan;老いる,おいる,menjadi tua
曲|6|lagu, bengkok, melengkung|まがる,まげる|キョク|Seni dan Bentuk|曰|曲,きょく,lagu;曲がる,まがる,berbelok;曲げる,まげる,membengkokkan;作曲,さっきょく,menggubah musik;名曲,めいきょく,lagu terkenal
払|5|membayar, menyapu|はらう|フツ,ヒツ,ホツ|Keuangan dan Aktivitas|扌|払う,はらう,membayar;支払い,しはらい,pembayaran;払い戻し,はらいもどし,pengembalian uang;前払い,まえばらい,pembayaran di muka;払い込む,はらいこむ,menyetorkan uang
庭|10|halaman, taman rumah|にわ|テイ|Tempat dan Lingkungan|广|庭,にわ,halaman;庭園,ていえん,taman;家庭,かてい,rumah tangga;校庭,こうてい,halaman sekolah;中庭,なかにわ,halaman tengah
徒|10|murid, sia-sia, berjalan kaki|いたずらに|ト|Pendidikan dan Aktivitas|彳|生徒,せいと,murid;徒歩,とほ,berjalan kaki;徒競走,ときょうそう,lomba lari;徒労,とろう,usaha sia-sia;信徒,しんと,penganut agama
勤|12|bekerja, rajin|つとめる,つとまる,いそしむ|キン,ゴン|Pekerjaan dan Aktivitas|力|勤める,つとめる,bekerja;勤務,きんむ,dinas atau pekerjaan;通勤,つうきん,pergi-pulang kerja;勤勉,きんべん,rajin;勤労,きんろう,kerja
遅|12|lambat, terlambat|おくれる,おくらす,おそい|チ|Waktu dan Kecepatan|辶|遅い,おそい,lambat;遅れる,おくれる,terlambat;遅刻,ちこく,datang terlambat;遅延,ちえん,keterlambatan;遅らせる,おくらせる,menunda
居|8|ada, tinggal, duduk|いる,おる|キョ,コ|Tempat dan Keberadaan|尸|居る,いる,ada atau tinggal;居間,いま,ruang keluarga;居住,きょじゅう,tempat tinggal;同居,どうきょ,tinggal bersama;居酒屋,いざかや,izakaya
雑|14|bermacam-macam, campuran|まじる,まぜる|ザツ,ゾウ|Klasifikasi dan Benda|隹|雑誌,ざっし,majalah;複雑,ふくざつ,rumit;雑音,ざつおん,kebisingan;雑談,ざつだん,obrolan santai;雑草,ざっそう,rumput liar
招|8|mengundang, memanggil|まねく|ショウ|Hubungan Sosial dan Komunikasi|扌|招く,まねく,mengundang;招待,しょうたい,undangan;招待状,しょうたいじょう,surat undangan;招待客,しょうたいきゃく,tamu undangan;招集,しょうしゅう,pemanggilan atau pengumpulan
困|7|kesulitan, kebingungan|こまる|コン|Perasaan dan Keadaan|囗|困る,こまる,kesulitan;困難,こんなん,kesulitan;貧困,ひんこん,kemiskinan;困惑,こんわく,kebingungan;困り事,こまりごと,masalah
欠|4|kurang, kekurangan, absen|かける,かく|ケツ|Jumlah dan Keadaan|欠|欠ける,かける,kurang atau retak;欠席,けっせき,tidak hadir;欠点,けってん,kekurangan;不足,ふそく,kekurangan;欠陥,けっかん,cacat atau kekurangan
更|7|lebih lanjut, mengganti|さら,ふける,ふかす|コウ|Waktu dan Perubahan|曰|変更,へんこう,perubahan;更新,こうしん,pembaruan;更に,さらに,lebih lanjut;更衣室,こういしつ,ruang ganti;夜更かし,よふかし,bergadang
刻|8|mengukir, waktu, saat|きざむ|コク|Waktu dan Aktivitas|刂|時刻,じこく,waktu atau jam;刻む,きざむ,mengukir atau mencincang;深刻,しんこく,serius;遅刻,ちこく,terlambat;彫刻,ちょうこく,patung atau ukiran
賛|15|memuji, menyetujui| - |サン|Penilaian dan Hubungan Sosial|貝|賛成,さんせい,setuju;賛否,さんぴ,pro dan kontra;賛同,さんどう,persetujuan;称賛,しょうさん,pujian;賛美,さんび,pujian atau pemuliaan
抱|8|memeluk, mengandung perasaan|だく,いだく,かかえる|ホウ|Perasaan dan Tindakan|扌|抱く,だく,memeluk;抱える,かかえる,memikul atau memiliki;抱負,ほうふ,cita-cita;抱擁,ほうよう,pelukan;抱きしめる,だきしめる,memeluk erat
犯|5|melanggar, melakukan kejahatan|おかす|ハン,ボン|Hukum dan Masyarakat|犭|犯す,おかす,melanggar;犯罪,はんざい,kejahatan;犯人,はんにん,pelaku kejahatan;違反,いはん,pelanggaran;防犯,ぼうはん,pencegahan kejahatan
恐|10|takut, khawatir|おそれる,おそれ,おそろしい|キョウ|Perasaan dan Emosi|心|恐れる,おそれる,takut;恐怖,きょうふ,ketakutan;恐ろしい,おそろしい,mengerikan;恐らく,おそらく,mungkin;恐れ入る,おそれいる,merasa sungkan atau kagum
息|10|napas, istirahat|いき|ソク|Tubuh dan Kehidupan|心|息,いき,napas;息子,むすこ,anak laki-laki;休息,きゅうそく,istirahat;息切れ,いきぎれ,sesak napas;ため息,ためいき,helaan napas
遠|13|jauh|とおい|エン,オン|Jarak dan Posisi|辶|遠い,とおい,jauh;遠足,えんそく,rekreasi sekolah;遠慮,えんりょ,sungkan;遠方,えんぽう,tempat jauh;永遠,えいえん,keabadian
戻|7|kembali, mengembalikan|もどる,もどす|レイ|Pergerakan dan Waktu|戸|戻る,もどる,kembali;戻す,もどす,mengembalikan;払い戻し,はらいもどし,pengembalian uang;元に戻る,もとにもどる,kembali seperti semula;取り戻す,とりもどす,mendapatkan kembali
願|19|permohonan, harapan|ねがう,ねがい|ガン|Harapan dan Hubungan Sosial|頁|願う,ねがう,berharap atau memohon;お願い,おねがい,permohonan;願書,がんしょ,formulir permohonan;願望,がんぼう,keinginan;志願,しがん,mendaftar secara sukarela
絵|12|gambar, lukisan| - |カイ,エ|Seni dan Benda|糸|絵,え,gambar;絵画,かいが,lukisan;絵本,えほん,buku bergambar;絵葉書,えはがき,kartu pos bergambar;絵文字,えもじ,emoji atau simbol gambar
越|12|melewati, melampaui, pindah|こす,こえる|エツ|Pergerakan dan Jarak|走|越える,こえる,melampaui;越す,こす,melewati atau pindah;引っ越す,ひっこす,pindah rumah;越境,えっきょう,melintasi perbatasan;年越し,としこし,pergantian tahun
欲|11|keinginan, ingin|ほしい,ほっする|ヨク|Perasaan dan Keinginan|欠|欲しい,ほしい,ingin;欲望,よくぼう,keinginan;食欲,しょくよく,nafsu makan;欲張り,よくばり,serakah;意欲,いよく,motivasi
痛|12|sakit, nyeri|いたい,いたむ,いためる|ツウ|Tubuh dan Kesehatan|疒|痛い,いたい,sakit;痛み,いたみ,rasa sakit;頭痛,ずつう,sakit kepala;腹痛,ふくつう,sakit perut;苦痛,くつう,penderitaan
笑|10|tertawa, senyum|わらう,えむ|ショウ|Perasaan dan Ekspresi|竹|笑う,わらう,tertawa;笑顔,えがお,wajah tersenyum;笑い声,わらいごえ,suara tawa;爆笑,ばくしょう,tertawa terbahak-bahak;微笑,びしょう,senyum tipis
互|4|saling, satu sama lain|たがい|ゴ|Hubungan dan Interaksi|二|互い,たがい,satu sama lain;相互,そうご,saling;互助,ごじょ,tolong-menolong;互角,ごかく,seimbang;互換,ごかん,kompatibilitas atau pertukaran
束|7|ikat, bundel|たば,たばねる,つか|ソク|Benda dan Jumlah|木|束,たば,ikat atau bundel;約束,やくそく,janji;花束,はなたば,buket bunga;束ねる,たばねる,mengikat;結束,けっそく,persatuan
似|7|mirip, menyerupai|にる,にせる,にせる|ジ|Perbandingan dan Sifat|亻|似る,にる,mirip;似合う,にあう,cocok;似顔絵,にがおえ,karikatur atau gambar wajah;類似,るいじ,kemiripan;そっくり,そっくり,persis mirip
列|6|barisan, deretan| - |レツ|Urutan dan Posisi|刂|列,れつ,barisan;列車,れっしゃ,kereta;行列,ぎょうれつ,antrean;列島,れっとう,kepulauan;整列,せいれつ,berbaris
探|11|mencari, menyelidiki|さがす,さぐる|タン|Aktivitas dan Pengetahuan|扌|探す,さがす,mencari;探る,さぐる,menyelidiki;探検,たんけん,penjelajahan;探偵,たんてい,detektif;探索,たんさく,pencarian
逃|9|melarikan diri, menghindar|にげる,にがす,のがす,のがれる|トウ|Pergerakan dan Keadaan|辶|逃げる,にげる,melarikan diri;逃がす,にがす,melepaskan;逃亡,とうぼう,pelarian;逃走,とうそう,pelarian;逃げ道,にげみち,jalan untuk melarikan diri
遊|12|bermain, berkunjung|あそぶ,あそばす|ユウ,ユ|Aktivitas dan Hiburan|辶|遊ぶ,あそぶ,bermain;遊び,あそび,permainan;遊園地,ゆうえんち,taman hiburan;遊覧,ゆうらん,tamasya;遊歩道,ゆうほどう,jalur pejalan kaki
迷|9|tersesat, bingung|まよう,まよわす|メイ|Perasaan dan Perjalanan|辶|迷う,まよう,tersesat atau bingung;迷子,まいご,anak tersesat;迷惑,めいわく,mengganggu;迷信,めいしん,takhayul;迷路,めいろ,labirin
夢|13|mimpi|ゆめ|ム|Pikiran dan Perasaan|夕|夢,ゆめ,mimpi;夢中,むちゅう,asyik atau terpikat;悪夢,あくむ,mimpi buruk;夢見る,ゆめみる,bermimpi;夢想,むそう,lamunan
君|7|kamu, tuan|きみ|クン|Hubungan Sosial dan Sapaan|口|君,きみ,kamu;君主,くんしゅ,penguasa;諸君,しょくん,saudara sekalian;君臨,くんりん,berkuasa;君たち,きみたち,kalian
閉|11|menutup|とじる,とざす,しめる,しまる|ヘイ|Aktivitas dan Keadaan|門|閉じる,とじる,menutup;閉める,しめる,menutup;閉まる,しまる,tertutup;閉店,へいてん,toko tutup;閉会,へいかい,penutupan rapat
緒|14|awal, tali, hubungan|お|ショ,チョ|Hubungan dan Benda|糸|一緒,いっしょ,bersama;緒,お,tali atau awal;由緒,ゆいしょ,sejarah atau asal-usul;情緒,じょうちょ,suasana emosional;端緒,たんしょ,awal atau petunjuk
折|7|melipat, patah, kesempatan|おる,おれる,おり|セツ|Tindakan dan Keadaan|扌|折る,おる,melipat atau mematahkan;折れる,おれる,patah;折り紙,おりがみ,seni melipat kertas;骨折,こっせつ,patah tulang;折角,せっかく,susah payah atau mumpung
草|9|rumput, tumbuhan|くさ|ソウ|Alam dan Tumbuhan|艹|草,くさ,rumput;草原,そうげん,padang rumput;雑草,ざっそう,rumput liar;草花,くさばな,tanaman berbunga;草食,そうしょく,herbivora
暮|14|hidup, menjalani hari, matahari terbenam|くらす,くれる|ボ|Waktu dan Kehidupan|日|暮らす,くらす,menjalani hidup;暮れる,くれる,hari menjadi gelap;夕暮れ,ゆうぐれ,senja;一人暮らし,ひとりぐらし,hidup sendiri;年の暮れ,としのくれ,akhir tahun
酒|10|sake, minuman beralkohol|さけ,さか|シュ|Makanan dan Minuman|酉|酒,さけ,minuman beralkohol;日本酒,にほんしゅ,sake Jepang;酒屋,さかや,toko minuman keras;飲酒,いんしゅ,minum alkohol;酒場,さかば,tempat minum
悲|12|sedih, menyedihkan|かなしい,かなしむ,かなしませる|ヒ|Perasaan dan Emosi|心|悲しい,かなしい,sedih;悲しむ,かなしむ,bersedih;悲劇,ひげき,tragedi;悲鳴,ひめい,jeritan ketakutan;悲観,ひかん,pesimisme
晴|12|cerah|はれる,はらす|セイ|Cuaca dan Alam|日|晴れる,はれる,menjadi cerah;晴れ,はれ,cuaca cerah;晴天,せいてん,langit cerah;快晴,かいせい,sangat cerah;晴れ着,はれぎ,pakaian formal
掛|11|menggantung, memasang, menelepon|かける,かかる,かかり| - |Tindakan dan Aktivitas|扌|掛ける,かける,menggantung atau menelepon;掛かる,かかる,tergantung atau memerlukan;腰掛け,こしかけ,tempat duduk;見掛ける,みかける,melihat secara kebetulan;心掛け,こころがけ,sikap atau perhatian
到|8|tiba, mencapai|いたる|トウ|Perjalanan dan Pencapaian|刂|到着,とうちゃく,kedatangan;到達,とうたつ,pencapaian;到来,とうらい,kedatangan;殺到,さっとう,berbondong-bondong datang;到る,いたる,mencapai
寝|13|tidur, berbaring|ねる,ねかす|シン|Kehidupan dan Aktivitas|宀|寝る,ねる,tidur;寝室,しんしつ,kamar tidur;寝坊,ねぼう,bangun kesiangan;昼寝,ひるね,tidur siang;寝台,しんだい,tempat tidur
暗|13|gelap, samar|くらい|アン|Cahaya dan Keadaan|日|暗い,くらい,gelap;暗記,あんき,menghafal;暗号,あんごう,kode rahasia;暗室,あんしつ,ruang gelap;暗闇,くらやみ,kegelapan
盗|11|mencuri|ぬすむ|トウ|Hukum dan Tindakan|皿|盗む,ぬすむ,mencuri;盗難,とうなん,pencurian;盗人,ぬすびと,pencuri;強盗,ごうとう,perampokan;盗作,とうさく,plagiarisme
吸|6|mengisap, menarik napas|すう|キュウ|Tubuh dan Aktivitas|口|吸う,すう,mengisap;呼吸,こきゅう,pernapasan;吸収,きゅうしゅう,penyerapan;吸血,きゅうけつ,mengisap darah;吸い込む,すいこむ,menghirup
陽|12|matahari, sisi positif|ひ|ヨウ|Alam dan Cahaya|阜|太陽,たいよう,matahari;陽気,ようき,ceria atau hangat;陽光,ようこう,sinar matahari;陽性,ようせい,positif;陽だまり,ひだまり,tempat yang terkena sinar matahari
御|12|kehormatan, awalan sopan|お,おん,み|ギョ,ゴ|Kesopanan dan Bahasa|彳|御飯,ごはん,nasi atau makanan;御礼,おれい,ucapan terima kasih;御主人,ごしゅじん,suami (bentuk sopan);御覧,ごらん,silakan lihat;御社,おんしゃ,perusahaan Anda
歯|12|gigi|は|シ|Tubuh dan Kesehatan|歯|歯,は,gigi;歯医者,はいしゃ,dokter gigi;歯磨き,はみがき,menggosok gigi;虫歯,むしば,gigi berlubang;歯ブラシ,はぶらし,sikat gigi
忘|7|lupa|わすれる|ボウ|Pikiran dan Ingatan|心|忘れる,わすれる,lupa;忘れ物,わすれもの,barang tertinggal;忘年会,ぼうねんかい,pesta akhir tahun;物忘れ,ものわすれ,pikun atau mudah lupa;忘却,ぼうきゃく,pelupaan
雪|11|salju|ゆき|セツ|Alam dan Cuaca|雨|雪,ゆき,salju;大雪,おおゆき,salju lebat;雪国,ゆきぐに,daerah bersalju;雪山,ゆきやま,gunung bersalju;新雪,しんせつ,salju baru
吹|7|bertiup, meniup|ふく|スイ|Alam dan Aktivitas|口|吹く,ふく,bertiup atau meniup;吹雪,ふぶき,badai salju;吹奏楽,すいそうがく,musik tiup;吹き出す,ふきだす,menyemburkan atau tertawa spontan;吹き飛ばす,ふきとばす,meniup hingga terbang
娘|10|anak perempuan, putri|むすめ| - |Keluarga dan Manusia|女|娘,むすめ,anak perempuan;娘さん,むすめさん,putri orang lain;一人娘,ひとりむすめ,anak perempuan satu-satunya;箱入り娘,はこいりむすめ,anak perempuan yang sangat dijaga;娘婿,むすめむこ,menantu laki-laki
誤|14|salah, keliru|あやまる|ゴ|Penilaian dan Komunikasi|言|誤る,あやまる,melakukan kesalahan;誤解,ごかい,salah paham;誤字,ごじ,kesalahan penulisan;誤差,ごさ,selisih atau galat;誤報,ごほう,berita yang salah
洗|9|mencuci|あらう|セン|Kebersihan dan Aktivitas|氵|洗う,あらう,mencuci;洗濯,せんたく,mencuci pakaian;洗面所,せんめんじょ,wastafel atau kamar cuci muka;洗剤,せんざい,deterjen;洗車,せんしゃ,mencuci mobil
慣|14|terbiasa, membiasakan|なれる,ならす|カン|Kebiasaan dan Aktivitas|忄|慣れる,なれる,terbiasa;慣らす,ならす,membiasakan;習慣,しゅうかん,kebiasaan;慣用句,かんようく,idiom;不慣れ,ふなれ,belum terbiasa
礼|5|sopan santun, terima kasih, penghormatan| - |レイ,ライ|Etika dan Hubungan Sosial|示|礼,れい,sopan santun;お礼,おれい,ucapan terima kasih;礼儀,れいぎ,tata krama;失礼,しつれい,tidak sopan atau permisi;礼金,れいきん,uang terima kasih
窓|11|jendela|まど|ソウ|Bangunan dan Benda|穴|窓,まど,jendela;窓口,まどぐち,loket;窓際,まどぎわ,dekat jendela;車窓,しゃそう,pemandangan dari jendela kendaraan;窓ガラス,まどガラス,kaca jendela
昔|8|dahulu, masa lalu|むかし|セキ,シャク|Waktu dan Sejarah|日|昔,むかし,dahulu;昔話,むかしばなし,cerita zaman dahulu;大昔,おおむかし,zaman dahulu kala;昔ながら,むかしながら,seperti dahulu;昔日,せきじつ,masa lampau
貧|11|miskin|まずしい|ヒン,ビン|Ekonomi dan Keadaan|貝|貧しい,まずしい,miskin;貧乏,びんぼう,kemiskinan;貧困,ひんこん,kemiskinan;貧血,ひんけつ,anemia;貧富,ひんぷ,kaya dan miskin
怒|9|marah|おこる,いかる|ド|Perasaan dan Emosi|心|怒る,おこる,marah;怒り,いかり,kemarahan;怒鳴る,どなる,membentak;激怒,げきど,kemarahan besar;怒りっぽい,おこりっぽい,mudah marah
泳|8|berenang|およぐ|エイ|Olahraga dan Aktivitas|氵|泳ぐ,およぐ,berenang;水泳,すいえい,renang;平泳ぎ,ひらおよぎ,gaya dada;背泳ぎ,せおよぎ,gaya punggung;泳ぎ方,およぎかた,cara berenang
祖|9|leluhur, nenek moyang| - |ソ|Keluarga dan Sejarah|示|祖父,そふ,kakek;祖母,そぼ,nenek;祖先,そせん,leluhur;祖国,そこく,tanah air;先祖,せんぞ,nenek moyang
杯|8|gelas, cangkir, hitungan minuman|さかずき|ハイ|Benda dan Ukuran|木|一杯,いっぱい,satu gelas atau penuh;乾杯,かんぱい,bersulang;杯,さかずき,cawan;優勝杯,ゆうしょうはい,piala juara;三杯,さんばい,tiga gelas
疲|10|lelah, letih|つかれる,つからす|ヒ|Kesehatan dan Keadaan|疒|疲れる,つかれる,lelah;疲れ,つかれ,kelelahan;疲労,ひろう,keletihan;疲労感,ひろうかん,rasa lelah;疲れ果てる,つかれはてる,sangat kelelahan
皆|9|semua, semuanya|みな,みんな|カイ|Jumlah dan Masyarakat|白|皆,みな,semua;皆さん,みなさん,Anda sekalian;皆様,みなさま,Anda sekalian (sopan);皆無,かいむ,sama sekali tidak ada;皆勤,かいきん,hadir setiap hari
鳴|14|berbunyi, bersuara|なく,なる,ならす|メイ|Suara dan Hewan|鳥|鳴く,なく,bersuara (hewan);鳴る,なる,berbunyi;鳴らす,ならす,membunyikan;悲鳴,ひめい,jeritan;雷鳴,らいめい,suara guntur
腹|13|perut, isi hati|はら|フク|Tubuh dan Kesehatan|肉|腹,はら,perut;お腹,おなか,perut;腹痛,ふくつう,sakit perut;満腹,まんぷく,kenyang;空腹,くうふく,lapar
煙|13|asap|けむり,けむる,けむい|エン|Alam dan Lingkungan|火|煙,けむり,asap;煙突,えんとつ,cerobong asap;禁煙,きんえん,dilarang merokok;喫煙,きつえん,merokok;煙草,たばこ,tembakau atau rokok
眠|10|tidur, mengantuk|ねむる,ねむい|ミン|Kesehatan dan Aktivitas|目|眠る,ねむる,tidur;眠い,ねむい,mengantuk;睡眠,すいみん,tidur;不眠,ふみん,insomnia;居眠り,いねむり,tertidur saat duduk
怖|8|takut, menakutkan|こわい,こわがる,おじる|フ|Perasaan dan Emosi|忄|怖い,こわい,takut;怖がる,こわがる,merasa takut;恐怖,きょうふ,ketakutan;怖がらせる,こわがらせる,menakut-nakuti;怖気,おじけ,rasa takut
頂|11|puncak, menerima (rendah hati)|いただく,いただき|チョウ|Kesopanan dan Geografi|頁|頂く,いただく,menerima atau makan (rendah hati);頂上,ちょうじょう,puncak;山頂,さんちょう,puncak gunung;頂点,ちょうてん,titik tertinggi;頂戴,ちょうだい,menerima (rendah hati)
箱|15|kotak|はこ|ソウ|Benda dan Perlengkapan|竹|箱,はこ,kotak;箱庭,はこにわ,taman mini;郵便箱,ゆうびんばこ,kotak surat;ごみ箱,ごみばこ,tempat sampah;重箱,じゅうばこ,kotak makanan bertingkat
晩|12|malam| - |バン|Waktu dan Kalender|日|晩,ばん,malam;今晩,こんばん,malam ini;毎晩,まいばん,setiap malam;晩ご飯,ばんごはん,makan malam;晩年,ばんねん,masa tua
寒|12|dingin|さむい|カン|Cuaca dan Suhu|宀|寒い,さむい,dingin;寒さ,さむさ,hawa dingin;寒気,さむけ,menggigil karena dingin;寒冷,かんれい,dingin;寒暖計,かんだんけい,termometer
髪|14|rambut kepala|かみ|ハツ|Tubuh dan Penampilan|髟|髪,かみ,rambut;髪型,かみがた,gaya rambut;白髪,しらが,rambut putih;長髪,ちょうはつ,rambut panjang;洗髪,せんぱつ,mencuci rambut
忙|6|sibuk|いそがしい,せわしい|ボウ,モウ|Waktu dan Aktivitas|忄|忙しい,いそがしい,sibuk;多忙,たぼう,sangat sibuk;忙しさ,いそがしさ,kesibukan;忙殺,ぼうさつ,sangat disibukkan;大忙し,おおいそがし,sangat sibuk
才|3|bakat, usia (tahun)| - |サイ|Usia dan Kemampuan|扌|才能,さいのう,bakat;天才,てんさい,jenius;才能豊か,さいのうゆたか,berbakat;十歳,じゅっさい,sepuluh tahun;何歳,なんさい,berapa umur
靴|13|sepatu|くつ|カ|Pakaian dan Benda|革|靴,くつ,sepatu;靴下,くつした,kaus kaki;革靴,かわぐつ,sepatu kulit;運動靴,うんどうぐつ,sepatu olahraga;長靴,ながぐつ,sepatu bot
恥|10|malu|はじ,はじる,はじらう,はずかしい|チ|Perasaan dan Sifat|心|恥,はじ,rasa malu;恥ずかしい,はずかしい,memalukan atau malu;恥じる,はじる,merasa malu;恥知らず,はじしらず,tidak tahu malu;赤恥,あかはじ,malu besar
偶|11|kebetulan, pasangan|たまたま|グウ|Jumlah dan Keadaan|亻|偶然,ぐうぜん,kebetulan;偶数,ぐうすう,angka genap;偶像,ぐうぞう,berhala;偶発,ぐうはつ,terjadi secara kebetulan;偶に,たまに,kadang-kadang
偉|12|hebat, luar biasa|えらい|イ|Sifat dan Penilaian|亻|偉い,えらい,hebat atau terhormat;偉人,いじん,orang besar;偉大,いだい,agung;偉業,いぎょう,prestasi besar;偉そう,えらそう,bersikap sok hebat
猫|11|kucing|ねこ|ビョウ|Hewan dan Alam|犭|猫,ねこ,kucing;子猫,こねこ,anak kucing;野良猫,のらねこ,kucing liar;猫舌,ねこじた,tidak tahan makanan panas;愛猫,あいびょう,kucing kesayangan
幾|12|berapa, beberapa|いく|キ|Jumlah dan Kata Tanya|幺|幾つ,いくつ,berapa buah atau usia;幾ら,いくら,berapa harga;幾度,いくど,berapa kali;幾何,きか,geometri;幾分,いくぶん,agak atau sedikit`;
