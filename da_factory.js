
application.factory('da_factory', function($http, $httpParamSerializer) { 
            var randomObject = {}; 
            
			
			
            randomObject.generate = function() { 
				
				var res={
    "furniture_styles":["Classic", "Midcentury", "Scandinavian", "Modern", "Contemporary"],
    "products": [
		{
            "name": "Sofa L Jobi",
            "description": "Selama Anda dapat berkumpul bersama keluarga dan orang-orang terdekat, duduk di manapun mungkin rasanya tidak menjadi masalah untuk Anda. Akan tetapi, dengan berkumpul bersama menggunakan Jobi L Sofa, suasana quality time Anda akan terasa 180 derajat perubahannya.",
            "furniture_style": ["Classic", "Midcentury"],
            "delivery_time": "14",
            "price": 5000000
        },
        {
            "name": "Sofa L Vienna",
            "description": "Apapun kegiatan ataupun peran Anda dalam kehidupan berumah tangga, setiap orang membutuhkan tempat nyaman untuk sejenak mengambil napas. Biarkanlah Wina L Sofa menjadi tempat Anda untuk sepenuhnya melupakan segala kesibukan dan hiruk-pikuk keseharian.",
            "furniture_style": ["Midcentury", "Contemporary"],
            "delivery_time": "2",
            "price": 7999000
        },
        {
            "name": "Sofa L Arsa Wooden Leg",
            "description": "Arsa 'L' Sofa dengan kaki kayu adalah gabungan dari sofa 2 seater dan 1 sofa memanjang yang cocok ditaruh ditengah maupun dipojok ruangan anda. Keseluruhan sofa didominasi oleh bantalan dengan busa khusus indoor dengan aksen kaki kayu. Cushion isi dacron yang ditambahkan pada sandaran punggung sofa menambah kenyamanan. Jangan heran bila Anda mudah terlelap di atas sofa ini.",
            "furniture_style": ["Scandinavian", "Modern"],
            "delivery_time": "7",
            "price": 9499000
        },
        {
            "name": "Sofa L Helena",
            "description": "Bagaimana pun style dekorasi hunian, pemilihan warna netral seperti hitam dan putih tak pernah salah. Warna ini dapat berbaur dengan cantik dan memberikan keseimbangan tampilan agar rumah tetap terlihat elegan. Bagi Anda yang menyukai sentuhan warna monokrom pada furnitur, Helena L Sofa tak boleh dilewatkan.",
            "furniture_style": ["Modern", "Contemporary"],
            "delivery_time": "2",
            "price": 7499000
        },
        {
            "name": "Forbyta Sofa Bed",
            "description": "Menikmati waktu liburan sambil bersantai memang paling pas dilakukan di rumah. Suasana rumah yang nyaman dan tenang akan membuat liburan semakin sempurna. Waktu santai di rumah akan membuat tubuh semakin rileks bila disempurnakan dengan furnitur yang pas. Forbyta Sofa Bed hadir sebagai penyempurna waktu santai Anda di rumah.",
            "furniture_style": ["Midcentury"],
            "delivery_time": "28",
            "price": 8999000
        },
        {
            "name": "Sofa Bed Acronap",
            "description": "Menikmati waktu liburan sambil bersantai memang paling pas dilakukan di rumah. Suasana rumah yang nyaman dan tenang akan membuat liburan semakin sempurna. Waktu santai di rumah akan membuat tubuh semakin rileks bila disempurnakan dengan furnitur yang pas. Forbyta Sofa Bed hadir sebagai penyempurna waktu santai Anda di rumah.",
            "furniture_style": ["Classic"],
            "delivery_time": "1",
            "price": 4999000
        },
        {
            "name": "Sofa L Wina",
            "description": "Apapun kegiatan ataupun peran Anda dalam kehidupan berumah tangga, setiap orang membutuhkan tempat nyaman untuk sejenak mengambil napas. Biarkanlah Wina L Sofa menjadi tempat Anda untuk sepenuhnya melupakan segala kesibukan dan hiruk-pikuk keseharian.",
            "furniture_style": ["Scandinavian"],
            "delivery_time": "12",
            "price": 8999000
        }
	]
}
				return res;
            }; 
            return randomObject; 

			
					
			
});

 