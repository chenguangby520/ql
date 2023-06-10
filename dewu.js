/*
目标:  得物App 抓包心愿森林heders里的x-auth-token 不要值前面的Bearer

格式：export dewu="token=eyJhxxxxxxxx"  多账号换行隔开

cron 32 5 8,12,18,22 * * ?

频道：https://t.me/+O6-uZI3t6uhhMmU1
*/

const $ = new Env("得物心愿森林");
let envSplitor = ['\n']  //多账号隔开方式，默认换行可自定义
///////////////////////////////维护参数自行更换//////////////////////////////////
let deviceTrait = 'V1824A'                   //设备型号
let deviceId = 'e01f046c50493edd'         //设备标识
let appVersion = '5.5.1'                     //软件版本
let defaultUA = 'Mozilla/5.0 (Linux; Android 10; V1824A Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.186 Mobile Safari/537.36/duapp/5.5.1(android;10)'                    //默认UA


var version_='jsjiami.com.v7',_0x2947=(function(){return[...[version_,'gTUbjMsGyjeiIpFayyImWib.MqcqoUmCA.MWvp7B==','WOO9mWddQSkmWQpcVmk9zCkrgmkhWP5lxvPhW6xcMSkTWQBdRfBcHGBdVCk7WOxcQ8oBWP/dGSoP','WRldLutcGCk7W4TjWQdcVW','W5LDla','WQlcGMddQrO1jcnEW5lcPfBcUcXtW4lOTOZLJyhMOOhMT77cSCo3WQ83bXj3EauUWPxcMSkTE8oR','WQm5vSoBW7OhW6RcGWddGYXS','WRS5wSo/W7O','WPidaYBdTq','qGHcWPBdS2aaWPZdSmoUa3lcMc8bWPH3W4hcHJFdIL8re8o0aCoHkmoSy8oJW6xcMCoYCCoIWOfcWQaMcXqVlWhdO8k6kG','W7JdOCoLWP5AAevHW5H5kSoN','smoVW4lcVc4','f8kSk8oJW7C','6ls+5y+nfa','b8kSnSoXW6RdOLPDW5ZdGSkQWQNcTG','W6ZdPmoKW64','WOtdL8o2acWWF8oHwmkBhmkGBmoYW4xdT8olWPdcNa','WPdcU8oMemo8','uoMyOEAZLowAL8oL6i+D5B2n5RcE5RQC5yoQEq','pSkKWRdcS8kUjCk1','W5HpW4i3qW','W6rKaSoeEq','WONdN0ldOW','W6HsW7CkBG','W64BWQO','tmoHW5VcQIu','cUMAKEAYLowyLW0','rSkGW6ORW6m','W75GcCkPWQruWPtcGctdQszuWPG','W75mW7aA','ymkuWOC','W5VdMYZcSejR','W6CmWRNdM10','W6BdQ8oYWRnvB24','zNpdSelcNMFcO8oI','6lEj5yYjW6O','WQtdLe7cGmk0W5zoWQRcTq','W4JcGmkoamkQW5K7BgxcLW','6lAB5y2/lW','gmkUWRRIG5VIGz/IGB3IG5BJG5K','WQJcS1ldS8kUWOKUW70gW5m','WOhcN8oCW6i','W6WvWQddJa','W6ZdVXhcQW','WQCIrCoQW6DzWOVdGXxdMJO7WPFcImk1FmkkW4C3W43cK25HsmkrvtBcH8oMWP/cK0OdW7pcHMddGq7cSINdO8o7WQ8pcSkHwCorWPxcV8kqBYhdU8ke','W4pcNmkHq0THFmoxACkApmkf','WR0ZuSo/W70vW4hdNG','6lE95yYAW5S','qrPfWORdMq','lEwiOos9LoAYJUA4UNG','WPtcRrRcT3NdQSkxWOnzWO3cJ8ktFG','W6VcMvtcHCkUW4LUWQhdUColWQG','WQCIrCoQW6DzWOVdGXxdMJO7WPFcImk1FmkkW4C3W43cK25HsmkrvtBcH8oMWP/cK0OdW7pcHMddGqNcQsVdQmo7WQqddCkk','WRBcKx0/','srnBWPBdRd9BW5BdL8oYeJS','W7/dRrxcSmoZdr8','kc/cUmoBCG','W6v0W6vr','W6ldPmoN','aSk4xG1i','WPq7m8oFCW','W4m0WO7dU03cGua','DSkiW4RdSgW','W7TtsCoIcK7dKsrw','W6lcKwNdM8kU','W7RdMWRcHmkg','W5ldL8ohWQXH','baT3W6dcIW','umoRW5hcQY4BWRe','FN3dPa','mEMHLUwpSUA0HoAWMEwKVUwjGUInMow8UG','WPFcQrRcIq','WPVcSvGWWPNdQ0m','WO0ZumoOW7erWOq','pWBcQCkojtBcUSkk','WOuWbq','jtldGXPEWPa1Eq','pSkqtSkUW7i','WOCEs8keW4fYsa','W6zWW6u','WP3dLslcGu5qxa','WP/cGSo7yCkB','fmkOmCofW7ldTa','W6JdPqNcPSkH','CvFcUmovWRDM','WPlMS6lMUyJLGj7KU7JOTzVVV7BML73LVRpMTy3MSkK','WRddJKpdGmkT','brZdLa','WOWffmoOkW','BedcOCoEWR9RgG','6lsm5y6lBq','W7ldTwy','W6/dU8kraUw0H+wTPoAlQG','na/cTSonASo2WQznBCodW4fSW5tcUmk8jYpcM1NdQsFcOg7cPmk9WOCslSoRh8oChhRcP8oEW4tdQSkBcZ57vuKMESkGvCorW4tcG8kGW6iOW6aiWQ3cGCkT','bGzKW63cUW','WRFdUf/dQSkk','WOxcU0W','W4y0WPtdMuG','WROdcCoajq','WPhdN0pdR8kH','F187','v+IpL+w+LUAZNUA7HEwcMbK','osldJq','nqDUW6RcOW','6lwg5yY+gq','WO4MidhdT8osW4ldVmk/pCozcW','AmkiW5xdTa','FNVdSf3dPW','CedcQCogWOLPc3CFaSkxzX8LoG3cKG','zEAuVUAlU+AkNowmQUs6KUwjO+w0OEwTUUAlMW','CGP5WO59','zCkFW5FdOhm','WP7cUWK','W5JdL0ZdH8kSfX7dOCkDW5nFwG','WOxdHCoGgti1','p8kTv8klW67cHSoY','W7tdHctcHmkk','WRpdGCoYab4JkW','W7HgbCoWaColWPiizCo0WRK9','oG5bW7tcUG','FeRcTCol','W7ldGCotWPP5','WOxcU0WEWPVdUwG5W7pcM8kQwW','WOtIN4FMNQRMI6NLIybKjmoP6k6o6zQ16k+x6iAN5P+K6k2z5PMq','WR4nemoejG','lYhdKY7dSq','mdldLbTwWPiX','oSkXs8kyW6FcHmo/WOjuWQqFWPSYWOKDW5RdHNO','rIPPWQ5e','WPVcKCoAW6ldRW','W4tdIIpcO0nW','FMVdRa8','W5dcICkQcCke','BMVdQWv9ca','pYpdLa9eW5X/z8kGss3cT3P0b8ocoCk1W6THEqbtW4hcTHRcQ1S3W6KzqSk5WOarWPP8cJufWQNdJvFdJh9Z','W69gW6CqzIxcQW','WRRPMBJMSjVLM67dV+InOow+NEAYToA6TEwdTxu','WOVcU08M','p1SLWQNdQq','qcTjWRHa','kmk+xSkmW4e','wmoGeNOvx8olWOZdLmkHWPBcJNa','W75mW7KpzJBcUKO8WPpcGSov','gmo3W5NcVxq','gmkXvYHKda','W7JdQXBcOG','W63dQSoUW4uvrGS','WP/dHCo+fW','W5pKURhKVz3MJPBLPkBLIPBMNA/LP67LJA/VVRZLHQhMRPZMIQ/OO6e','WPSLhr3dMa','AL88WOPveZu','f8kpq8kaW4O','WOGhgSotlxtcGW','r1BcKmotWOO'],...(function(){return[...['W6hcKe7dMCkOfK0','W7ddLxhdU8o7','otBdJrO','WO/dKLNdKSk8','WPFNRkVNU5ZLP7FLI7NLT7tPOkxLJR4','kSkCt8kGW4a','5AEAW6HdW4uZWRJKUlJMLipOV57MN47MIRlLJPq','rEAwIUAiHoAkTUwnMos6NUwlSEs6TUAxJEw1TUwTTUAjMq','W4m9WQddK0W','WR5zqCktW513b1yYzmoLWQhcGsC','WOaMiWK','c8orW4lcVLW','EavIWO9yW5jg','dmkSlmojW6RdUa','W4RdGcNcVq','WRWkACkmW7C','dmkMjCoVW7ddThfxW7FdGSkIWRy','yCkiWOFcVSkXdSkurrZcVYvp','W6OYwmkP','W4rBomo4','W58WWPddSq','WOmEBmkWW6K','oZJdHZ5zWOiEj8k1udVdOa','WQZcVCoQq8kzWOhcNG','FvdcO8oaWRTMc1ymeG','B8orW6hdJq','WOWOkHu','6lAY5y25W5K','WOFcISofW7FdSSkrEmojz8kUWOT9WQiiaGquW4JcTtqlWP9DW4e2dwRdHgHxW4ddHCkrW5NdPmkucmoQAmoZiCkYkt7cL8oVqmkIjW','rSkyW4aJW5q','AmomW6RdMg14uq','ySkiW4ZdSa','jclcMSkfbG','bcz5W5VcOGBcKSogWQhdRCkBWO8','hczQW7VcOcBcRSogWQxdQmkyWOi','WPiGaSoL','pXFcO8ooASkLW68B','EGTIW7ZcThpcQSk4WR7cSvFdSW','kmkiqCksW6K','W6ddQSoTW7i','yCo9dmoDWRRdKSkYWRTeWPSnWRG1','WO4HoSonjW','6lEe5y6IkG','W6j0W79IW6GEWPq','lX7cQCkjiYW','g8kQtIXk','WQRcQCogW57dHq','WOpcKCow','W4tdGcRcHvL8r2ehWPBdRWi','ntJdHay','W4BcJvVdMCkSjrRdQCkjW44XcxlcNq','WRlcKwuUW5K','zCkcW6ugW78','EMBdT1NcOZZdOCkOdSkDW6RdN8kWbCkQWPn/W5hdNmoHW4RdKSotdepcISoMbSkLWP3dJSowk2GOW745W7/cVLeLzmk1kmoAW7G5BmkOug/dTeW','uMuVW5NcOs/cKmofWRtdTCkBWR3dPx7dRcRcUW','W7ddPqxcGSkHWPOXW54HW6dcJCoR','guGcW5xdPbf/W57dH8oj','WOFcQNKjW7S','W6ZdQXdcSmkQ','WOKZaSoHsq','W7nmfG','WRpdMLpcJ8ktW4nkWQa','j8kflmoIW7K','5RcQ5RUr5yoT','W67cR1BdUCkb','WQKExmktW4Hsdvm3nmk7','BKRcOSog','bG9FW5lcIq','WP4vDSoEW6u','WRxdKw7cSCkE','EHDlWQ98','W7udWOtdHNu','6lEJ5y6mCq','W7ddRWZcPmk7WPy','AKtcOSozWPbPeNC','WOVINzNMNRVMIy7LIR08WRSA6k6l6zMn6k+Q6iEH5P+B6kYy5PIQ','W5tdPHdcP8oU','yXntWO9sW4fkBMG7WPddJrm6WRe','W4tcKfVdTmk6brNdRCkjW4mtb17cM8o9WO3cRCoOWQ0','WQ7dLuNcKa','W7FdOCoSWRTDEgjHW4i','WPS2amo7qa','DLSIWOa','W5hcICk+uUw2IEwVNEAiMW','WPG+pCohuW','g8onW47cH0alWQ0','W517nCoJcG','vwFcHSogWR0','g8otW73cK0u','W5hdPXpcG8o4g3f2WPebWQOC','WPpdRLRcRSkB','W50+WPRdLu/cK2TRsmkWWPbU','WQJcN1SXW6q','W5hdP8oOWRTG','6lwP5y+nda','WOVcN8ofW6y','weVcGCoAWPi','rEs4Gos+KUApPowLR+wlLoADKowLM+wmVU++IowfT+ATQoAjJ+IJMW','jK0BWQldOG','vmo5DmkxWQBcPWDBW7RdG8kRWOpcSq','WRxdNLpcI8kXW5rc','zbvS','WP3cM8ocW6JdRCoDmG','rEwoGEwVG+AlTrriBKii','gd15W4RcVxJdJ8kgWRddSCkoW5xdRxRdVh3cRWWCqMSLWQueWO/cLdfsWPlcH8oxnXFcRmk4tCovWQKQBCoOACocB8k5hCoNWOC7DG','DMddRfNcVgpcUG','x8oRW4tcKdWiWRBcTSkeWQjmW7Ofqmo7cImrW60','W7ddG0NdM8oU','bfKIWR3dKW','WQhcT8orrW','W7ncW7KA','WPRcOfK2WPVdUK8WW74','6lEb5y2jDa','W6ldH8oYWRjI','6lAK5y6dWPy','rCk3W7SiW4qEeXZdQ2hdTmoAtumZ','AfS9WOru','fYhdOJNdOW','WOpcQrZcIwa','WRxcI14YW6u','W7lcJrFdKmoKWPfmWO7cVmkIW7dcHq','WOVdKuJdH8kRWRneW681WQaPWQG','bX/dNbe','idBdIqS','WPqnfCoFxq','vmoHW5FcJIunWOZcVmkcWQjeW6q','W4ZdJJNcPq','EXnBWPxdHG','ivS6WQ0','irJdIsHc','W7tdVHBcS8k8W4rqWP40W7NcM8k8eY/cQmkQWQ0vW4JcLSkma8kzWP03fML4W6ydW7tcUq9JW7ldLqeUxLm8W4/dHGVcOYSz','W7fadCoGsG','W6SAWQNdJeq','CSkiW4VdUK9ynSkx','DCoFW7tcNZW','rmkmW5NdO2rlEW','kmkQB8kYW4C','smo7W4pcPW','WPZcV8oRd8oU','dr7dNbhdOW','xmoVW4tcRG','W61mW6Cl','W6nifSouhCogWRia','n8kLvmkp','qSoQW5JcHcm','fcH5W5S','tH1cWOC','WRaJWQKdWR1iW4bwlaT9WRRcNa','WOldJmo8bryIBa','W6j6W7vv','6lAh5yYeWPy','Afu8WPe','r8kYW6W3W58','yhFdSeBcVhdcQW'],...(function(){return['W4NcLSkSc8kIW5SK','W5fsW5GiEW','W7PCdW','WQ3cJSoBW4NdTa','WPdcQrRcI2u','W6LmW78Aza','cb/dNZxdTtRcLdVdQYZcRb8','WQ7cMeutWPi','W4j2W4z9W4a','WPhcPWRcKq','6lEP5yYHW6C','6lsR5yYqWRS','p1uKWRW','v+AxKoAjIUAkUEwnKos5N+wkGUs7KUAxQow2M+wTUEAkQG','Cx3dRv3cTwJcUG','WQ7cUSoq','WOSGhr/dNW','rmkLWRNcP8k1','l8opW53cHLe','uhFdOLVcTxtdRG','WQVcJmoYiSo7','W63dVSoYW6uvsrVcNHJdHeNdJ8kHW4m5BSk6ktFdMSkX','W5tcLeBdNW','W5NdQqdcOW','BGf1WOS','WReAwCkDW61K','W4nLo8owwG','zmkuWQpcKmkYgSk2tXZcSW','W77dQSoYW7yD','WOBcU2KsWRO','W7ldQW/cPG','6lwo5y2tW7i','W7/dMSoBWQ9Z','vSk3W7Sm','WO/cV24RWQi','W7ddPqu','W4BdVLNdNdtcQ8kzWQ1HWRFcM8kz','W57dPXdcPW','Bqv1WRvDW4fvFwe2WOFdNWuPWQCg','WOJcVCoqW5pdHW','F8kcWPpcKmkZhmk/','W79ttSkvEdldHrXZv8oCcq','W6ZdOJpcR8kA','daldOHFdSq','WQtdL0hcL8kUW4TbWRW','WRRcMmo0k8o5wW','WPiTzSkfW6C','W73dRSkoe8ofW5JcJCkqW7nIu8k6','W6FdQ8oSWRS','oIhcISkUfa','rrfZWRtdIq','iCkXvSkLW6u','W7tdRWpcP8kQWOWm','W608qSkP','k8olW4FcNxOmWRDeg8klW63cStj3','6lsG5yYEW6m','wL8UWPDCf3a','Ax3dJbrU','WPJcN8oyW7m','s8o+W5ZcPJ8','W7xdPaBcPSk3','W67dR3ldSa','WRiAq8kc','obRcTSoC','pGxcRmke','vCo9W5C','hspcUSoLBa','nsfRW5BcOG','W5Hbla','W68lfSoqhmoeWPudm8kNW70','fa7cR8kjaq','mdtdUdrs','6lEv5yY/nq','aXxdJcVdTZVcRdhdSXRcUanTx1v7','hHBdMq5E','xSk5W6G','uoAZS+AWGEwMQEwjRLa','W43cO3JdRCky','WQeAxSkx','WPGznrldTq','WP0MdSoKda','WQKutCk3W4PKjKSIl8k5W7O','W7mIWPddV2a','WRhdMeVdO8ko','vSoVW53cQG','FoI2PUELUEs6TUs4S+EUHEE4RUI+UUw3OG','W4NdGCoiW6i+','y8oCW6/dJwjP','dv82WRRdOtxdRa','WOVdKuG','WPe9nuldS8ofW6pdVq','DwxdILRcPa','5Q2U5Rw95RgJ77+j5B+x5yIk566f57MRW7y','5lUV6lwD5y+D','uCo4CmoTW5ZdMe10W5q','amoqW53cMwXyW6XgnSkEW7pdUcj6F8ktWRlcKYP6wmkRWQddTxOWxMGnDCkFmYRdVSoHoCoVW4NcJJnXC8k4WPNdVMi','fGPVW7/cOq','W6BdQ8oHWRPDEM4','WPmopWldRW','W6tdSKFdTSoJ','W4dMSjFMUAdLGypKUiFOT6dVV4lMLjhLVBNMTRJMS5C','lvuZWRe','W4umWPtdUfC','sow/T+wlPoEUOoE6UfJcJX8','W5VdNYhcRum','6lw/5yYZyG','wglcG8ofWQO','h8kKvIPdd8kAWONdLa','kSoiW4pcQ0y','W5ZdJJ7cR2nHEwS','mr7dOt3dOq','W5DbjCoKEColW7W','xH1fWO3dLcnFW5y','6lA45y2TwG','WROOdHxdGW','W75cW7OTBZlcQG','WPddN0BdSG','D1BcKSoDWRn4e3CzdG','W7abrCkZW51ipq','ugqGWPRMN6tLR47MI7a','WQSKxSoQW7GgW5a','WQddJ8oWmCo5rdFdK8ouxSoCdSowW5O','W5DbjCoKEColW7ZdGCoQW5rqWQ8','W5RdNapcHSoM','WO4ScSo7cW','q+AFGoISS+I2LoAlQEwKUEI1MU+8NUwoTEMgPowNIoAvIoAjNEAIJoAESUwoSoMeRUAIO+w+Ha','hSk1rYzehSkwW50','qmkZW7GmW4qtmW7dGG','W5C4WPhdOetcHq','wtbOWOX3','mdldLcbdWPq1lCkEudpdV3e','WOhcOf8VWOBcPWL5W6BcGSk8dchcSs4cvNarWOC2WQ9utgddHqhdVaX0W6LhWOFdNMJcICkCW4mzWQBdG8kzW5LtzSkQCZPlWQiEWR/dImolWOxcOColW4rzqY8','W5FdJhtdLmoY','cCkNk8oA','ntpdVZddQG','tvtcNmo1WPy','pmkQtW','WRFcGSoNaSo4trBdImoffCkavq','W7FdU8oWWQ1ryN9cW4LMkCoYFCoTW69VnJ0zW41iW6pcKCkjWQfbW7xcLujiCW','W7O3W7jFW6mBWPLofsD/W5NdJq','uoEyIEAJP8of','W4pLJkhPOOFLJy7cHCkQj3q','WQBcPCoYtCkrWO0','pXtcRmozCmk4W6anyG','W6r2W7WrFq','DgVdTqS','6lwX5y6GW7S','W57dOYlcO8o6fLS','W7tdVHBcS8k8W4rqWP40W7NcM8k8eY/cQmkQWQ0vW4JcLSkma8kzWP03fML4W6ydW7tcUq9JW7ldLqe+tu8NWOZdHGFdUJWaWPtdUhrlzCkGWPpdSHqQW50','WRRMSQRMS47LP5dLIBtdRq','6ls45y+sWOO','DLhcPCocWQ0Yud0mg8kjlI8Pib3dJ8o8W6qfW7hdJwGrrv8IW5/cR8oRW5VcUvddJK5XW5pdV8obFmoNtmoxW5nxW4acDce'];}())];}())];}());const _0x4fe346=_0x30d9;function _0x30d9(_0x3420cf,_0x2b7d5c){const _0x2947da=_0x2947;return _0x30d9=function(_0x30d97e,_0x86608d){_0x30d97e=_0x30d97e-0x1ea;let _0x2b5b39=_0x2947da[_0x30d97e];if(_0x30d9['RvdkjV']===undefined){var _0x198c0b=function(_0x2d0904){const _0x251a6f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5b42f4='',_0x1feb19='';for(let _0x44a369=0x0,_0x178820,_0x2504f8,_0x222739=0x0;_0x2504f8=_0x2d0904['charAt'](_0x222739++);~_0x2504f8&&(_0x178820=_0x44a369%0x4?_0x178820*0x40+_0x2504f8:_0x2504f8,_0x44a369++%0x4)?_0x5b42f4+=String['fromCharCode'](0xff&_0x178820>>(-0x2*_0x44a369&0x6)):0x0){_0x2504f8=_0x251a6f['indexOf'](_0x2504f8);}for(let _0x33d844=0x0,_0x391afa=_0x5b42f4['length'];_0x33d844<_0x391afa;_0x33d844++){_0x1feb19+='%'+('00'+_0x5b42f4['charCodeAt'](_0x33d844)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1feb19);};const _0x314f2d=function(_0x197124,_0x43eada){let _0x4bd63b=[],_0x3c6516=0x0,_0x5cbc74,_0x5b602a='';_0x197124=_0x198c0b(_0x197124);let _0x184413;for(_0x184413=0x0;_0x184413<0x100;_0x184413++){_0x4bd63b[_0x184413]=_0x184413;}for(_0x184413=0x0;_0x184413<0x100;_0x184413++){_0x3c6516=(_0x3c6516+_0x4bd63b[_0x184413]+_0x43eada['charCodeAt'](_0x184413%_0x43eada['length']))%0x100,_0x5cbc74=_0x4bd63b[_0x184413],_0x4bd63b[_0x184413]=_0x4bd63b[_0x3c6516],_0x4bd63b[_0x3c6516]=_0x5cbc74;}_0x184413=0x0,_0x3c6516=0x0;for(let _0x3ae89c=0x0;_0x3ae89c<_0x197124['length'];_0x3ae89c++){_0x184413=(_0x184413+0x1)%0x100,_0x3c6516=(_0x3c6516+_0x4bd63b[_0x184413])%0x100,_0x5cbc74=_0x4bd63b[_0x184413],_0x4bd63b[_0x184413]=_0x4bd63b[_0x3c6516],_0x4bd63b[_0x3c6516]=_0x5cbc74,_0x5b602a+=String['fromCharCode'](_0x197124['charCodeAt'](_0x3ae89c)^_0x4bd63b[(_0x4bd63b[_0x184413]+_0x4bd63b[_0x3c6516])%0x100]);}return _0x5b602a;};_0x30d9['dhsFUS']=_0x314f2d,_0x3420cf=arguments,_0x30d9['RvdkjV']=!![];}const _0x3aa28f=_0x2947da[0x0],_0x344f83=_0x30d97e+_0x3aa28f,_0x27d5e6=_0x3420cf[_0x344f83];return!_0x27d5e6?(_0x30d9['zvntqX']===undefined&&(_0x30d9['zvntqX']=!![]),_0x2b5b39=_0x30d9['dhsFUS'](_0x2b5b39,_0x86608d),_0x3420cf[_0x344f83]=_0x2b5b39):_0x2b5b39=_0x27d5e6,_0x2b5b39;},_0x30d9(_0x3420cf,_0x2b7d5c);}(function(_0x187990,_0x3c1ebd,_0x450f71,_0x1954df,_0x48eac1,_0x532bc0,_0x32c62){return _0x187990=_0x187990>>0x9,_0x532bc0='hs',_0x32c62='hs',function(_0x574d3a,_0x164a21,_0x276e8a,_0x5384fa,_0x457b6a){const _0x1bf1c5=_0x30d9;_0x5384fa='tfi',_0x532bc0=_0x5384fa+_0x532bc0,_0x457b6a='up',_0x32c62+=_0x457b6a,_0x532bc0=_0x276e8a(_0x532bc0),_0x32c62=_0x276e8a(_0x32c62),_0x276e8a=0x0;const _0x33514c=_0x574d3a;while(!![]&&--_0x1954df+_0x164a21){try{_0x5384fa=parseInt(_0x1bf1c5(0x375,'r6Ut'))/0x1+-parseInt(_0x1bf1c5(0x239,'[%I5'))/0x2+parseInt(_0x1bf1c5(0x230,'[w4l'))/0x3*(-parseInt(_0x1bf1c5(0x37a,'*X($'))/0x4)+parseInt(_0x1bf1c5(0x26d,'2w5r'))/0x5*(-parseInt(_0x1bf1c5(0x2aa,'7fuD'))/0x6)+parseInt(_0x1bf1c5(0x24a,'zP0q'))/0x7*(parseInt(_0x1bf1c5(0x3af,'TKc9'))/0x8)+parseInt(_0x1bf1c5(0x2df,'rAVI'))/0x9+-parseInt(_0x1bf1c5(0x245,'C&oc'))/0xa*(-parseInt(_0x1bf1c5(0x2ef,'@dDL'))/0xb);}catch(_0x3e7f3e){_0x5384fa=_0x276e8a;}finally{_0x457b6a=_0x33514c[_0x532bc0]();if(_0x187990<=_0x1954df)_0x276e8a?_0x48eac1?_0x5384fa=_0x457b6a:_0x48eac1=_0x457b6a:_0x276e8a=_0x457b6a;else{if(_0x276e8a==_0x48eac1['replace'](/[bTWIpUgMByqGFeAC=]/g,'')){if(_0x5384fa===_0x164a21){_0x33514c['un'+_0x532bc0](_0x457b6a);break;}_0x33514c[_0x32c62](_0x457b6a);}}}}}(_0x450f71,_0x3c1ebd,function(_0x2788b8,_0x229467,_0x3fd45a,_0x178db1,_0x2ec7f1,_0x3b27a4,_0x574d2c){return _0x229467='\x73\x70\x6c\x69\x74',_0x2788b8=arguments[0x0],_0x2788b8=_0x2788b8[_0x229467](''),_0x3fd45a=`\x72\x65\x76\x65\x72\x73\x65`,_0x2788b8=_0x2788b8[_0x3fd45a]('\x76'),_0x178db1=`\x6a\x6f\x69\x6e`,(0x11d011,_0x2788b8[_0x178db1](''));});}(0x18800,0x9a385,_0x2947,0xc6),_0x2947)&&(version_=_0x2947);let httpResult,httpReq,httpResp,userCookie=($[_0x4fe346(0x215,'zy$d')]()?process[_0x4fe346(0x20f,'rAVI')]['dewu']:$[_0x4fe346(0x29b,'6(lm')]('dewu'))||'',userList=[],userIdx=0x0,userCount=0x0;class UserInfo{constructor(_0x284a32){const _0x5462e5=_0x4fe346,_0x4974b7={'IBYXj':function(_0x12b2b7,_0x1fd975){return _0x12b2b7===_0x1fd975;},'kfslY':_0x5462e5(0x2fe,'1BuU')};this[_0x5462e5(0x33b,'wj&i')]=++userIdx,this[_0x5462e5(0x346,'rAVI')]=this[_0x5462e5(0x303,'AreA')],this['valid']=![],this['canRead']=![];try{if(_0x4974b7[_0x5462e5(0x362,'[w4l')](_0x4974b7[_0x5462e5(0x2f2,'#(oh')],_0x4974b7[_0x5462e5(0x24d,'@dDL')]))this['param']=$[_0x5462e5(0x3ab,'$1&o')](_0x284a32),this[_0x5462e5(0x21a,'AreA')]=!![];else return _0x5b42ed['resolve'](0x1);}catch(_0x2c786e){this['ckValid']=![],$['logAndNotify'](_0x5462e5(0x219,'6(lm')+this[_0x5462e5(0x342,'[ZYz')]+']CK格式错误');}}async['my'](){const _0x48783c=_0x4fe346,_0xa3c887={'pJDVl':function(_0x21aad6,_0x1899c2,_0x2fa410){return _0x21aad6(_0x1899c2,_0x2fa410);},'CcWMM':_0x48783c(0x281,'P$@b'),'nYHCF':function(_0x1918c4,_0x369f2e){return _0x1918c4==_0x369f2e;},'KcuuW':function(_0x929a44,_0x17adc1){return _0x929a44===_0x17adc1;},'nVWFU':'LqLwq','lADFD':function(_0x3e7e72,_0x1263c6){return _0x3e7e72===_0x1263c6;}};try{let _0x23ed9a=_0x48783c(0x2ec,'^&8E'),_0x23fbd1='',_0x232e6c='Bearer\x20'+this['param'][_0x48783c(0x236,'q8z6')],_0x57f443=populateUrlObject(_0x23ed9a,_0x232e6c,_0x23fbd1);await _0xa3c887[_0x48783c(0x225,'$1&o')](httpRequest,_0xa3c887[_0x48783c(0x359,'gv@7')],_0x57f443);let _0x43598c=httpResult;if(!_0x43598c)return;_0xa3c887[_0x48783c(0x322,'g2]C')](_0x43598c[_0x48783c(0x23a,'!jNk')],0xc8)?_0xa3c887[_0x48783c(0x323,'*aE0')](_0xa3c887[_0x48783c(0x39e,'zS!L')],_0x48783c(0x352,'!jNk'))?(this['valid']=!![],this[_0x48783c(0x2e2,'gv@7')]=!![],$[_0x48783c(0x2c7,'TKc9')](_0x48783c(0x2d2,'9q1D')+this['name']+_0x48783c(0x213,'[w4l')+_0x43598c[_0x48783c(0x368,'AreA')]['name']+_0x48783c(0x1ee,'Rc*4')+_0x43598c[_0x48783c(0x343,'q8z6')]['level'])):_0x5ed471[_0x48783c(0x2d9,'i[6S')](_0x48783c(0x21d,'H&@^')+this['name']+_0x48783c(0x2a5,'zvNR')+_0x4c96c8[_0x48783c(0x316,'blNL')][_0x48783c(0x1ff,'[%I5')]):$[_0x48783c(0x2cd,'6(lm')](_0x48783c(0x34d,'4%W1')+this[_0x48783c(0x337,'*aE0')]+_0x48783c(0x204,'H&@^'));}catch(_0x56522d){}finally{if(_0xa3c887['lADFD']('UqpJN','jalnm'))_0x5189ea=_0x57b8e0[_0x48783c(0x2f1,'C&oc')](_0x2dd238[_0x48783c(0x2e8,'6(lm')]);else return Promise[_0x48783c(0x2b3,'P$@b')](0x1);}}async['list'](){const _0x4275f2=_0x4fe346,_0x38e952={'IRWRe':_0x4275f2(0x2f3,'Ka[e'),'gCaTF':function(_0xfc384b,_0x2693da){return _0xfc384b&_0x2693da;},'tFfti':function(_0x13216e,_0x3fc505){return _0x13216e==_0x3fc505;},'naUzS':function(_0x14961f,_0x2e1bf1){return _0x14961f&_0x2e1bf1;},'GLnLg':function(_0x328f57,_0x5ba63b){return _0x328f57==_0x5ba63b;},'qnVXE':'6|0|5|3|1|2|4','WDuED':function(_0x48a3b0,_0x5f3e8a){return _0x48a3b0&_0x5f3e8a;},'PTGCn':function(_0x19cb6e,_0x54bdfd){return _0x19cb6e==_0x54bdfd;}};try{let _0x2f3303=_0x4275f2(0x2a3,'6(lm'),_0x4ce8f0='',_0x4f4b5b=_0x4275f2(0x254,'AreA')+this[_0x4275f2(0x27f,'*X($')][_0x4275f2(0x299,'*X($')],_0x1b38db=populateUrlObject(_0x2f3303,_0x4f4b5b,_0x4ce8f0);await httpRequest(_0x38e952[_0x4275f2(0x30d,'Ka[e')],_0x1b38db);let _0x4af568=httpResult;if(!_0x4af568)return;let _0x3be73f=_0x4af568?.['data']['taskList']||[];for(let _0x2f26b5 of _0x3be73f){if(_0x38e952[_0x4275f2(0x378,'blNL')](_0x38e952['tFfti'](_0x2f26b5[_0x4275f2(0x242,'4%W1')],!![]),_0x2f26b5[_0x4275f2(0x304,'wP^P')]==![]))$[_0x4275f2(0x2e7,'2w5r')](_0x4275f2(0x35c,'[w4l')+this[_0x4275f2(0x2cb,'1BuU')]+']'+_0x2f26b5['taskName']+'\x20--\x20可领取'),this[_0x4275f2(0x26f,'TKc9')]=_0x2f26b5[_0x4275f2(0x36a,'y3V!')],await $[_0x4275f2(0x1fb,'zvNR')](0x7d0),this[_0x4275f2(0x37d,'f%71')]=_0x2f26b5[_0x4275f2(0x2db,'GU8g')],this['completeFlag']=_0x2f26b5[_0x4275f2(0x2ab,'!jNk')],this['taskId']=_0x2f26b5[_0x4275f2(0x28f,'zP0q')],this['taskName']=_0x2f26b5[_0x4275f2(0x23f,'^&8E')],await this[_0x4275f2(0x2c3,'wP^P')]();else{if(_0x38e952[_0x4275f2(0x313,'3(o1')](_0x38e952['GLnLg'](_0x2f26b5['isComplete'],![]),_0x38e952[_0x4275f2(0x2f5,'TKc9')](_0x2f26b5['isReceiveReward'],![]))){const _0x40ad41=_0x38e952[_0x4275f2(0x33f,'rAVI')]['split']('|');let _0x27bd61=0x0;while(!![]){switch(_0x40ad41[_0x27bd61++]){case'0':this[_0x4275f2(0x1f4,'2w5r')]=_0x2f26b5['taskType'];continue;case'1':await $['wait'](0x7d0);continue;case'2':$[_0x4275f2(0x310,'AreA')]('账号['+this['name']+_0x4275f2(0x31e,'P$@b')+this['taskName']);continue;case'3':this[_0x4275f2(0x33c,'ubDc')]=_0x2f26b5['taskName'];continue;case'4':await this[_0x4275f2(0x2e3,'!YEM')]();continue;case'5':this[_0x4275f2(0x2ad,'7fuD')]=_0x2f26b5[_0x4275f2(0x2a2,'tUo]')];continue;case'6':$[_0x4275f2(0x310,'AreA')](_0x4275f2(0x285,'TKc9')+this[_0x4275f2(0x218,'tUo]')]+']'+_0x2f26b5['taskName']+_0x4275f2(0x1fe,'i[6S'));continue;}break;}}}_0x38e952[_0x4275f2(0x3a1,'*X($')](_0x38e952[_0x4275f2(0x358,'(nQW')](_0x2f26b5['isReceiveReward'],!![]),_0x38e952[_0x4275f2(0x26e,'zy$d')](_0x2f26b5[_0x4275f2(0x36c,'[w4l')],!![]))&&('FzDmU'==='FzDmU'?$['logAndNotify'](_0x4275f2(0x240,'blNL')+this[_0x4275f2(0x346,'rAVI')]+']'+_0x2f26b5[_0x4275f2(0x301,'H&@^')]+_0x4275f2(0x279,'zy$d')):_0x1c21bc=_0x1f0498['body']);}let _0x10026d=_0x4af568?.[_0x4275f2(0x372,'G5!z')][_0x4275f2(0x2e9,'zS!L')]||[];for(let _0x2605a1 of _0x10026d){_0x38e952['PTGCn'](_0x2605a1['status'],0x1)&&(this[_0x4275f2(0x241,'f%71')]=_0x2605a1[_0x4275f2(0x216,'GU8g')],await $[_0x4275f2(0x332,'6(lm')](0x7d0),await this[_0x4275f2(0x23d,'wj&i')]());}}catch(_0x347e71){console[_0x4275f2(0x257,'6bq9')](_0x347e71);}finally{return Promise['resolve'](0x1);}}async['status'](){const _0xd9d28c=_0x4fe346,_0x2567f8={'fKBSB':function(_0x2b3a6,_0x40901d,_0x1c1575,_0x3515b5){return _0x2b3a6(_0x40901d,_0x1c1575,_0x3515b5);},'QmeJB':function(_0x45e057,_0xf98cb8,_0x20ab2c){return _0x45e057(_0xf98cb8,_0x20ab2c);}};try{let _0x5825a5=_0xd9d28c(0x226,'@dDL'),_0x1623d4=_0xd9d28c(0x396,'Ka[e')+this['taskld']+'\x22,\x22taskType\x22:\x22'+task[_0xd9d28c(0x1f7,'@dDL')]+'\x22}',_0x31eb7f=_0xd9d28c(0x292,'zP0q')+this[_0xd9d28c(0x36d,'6bq9')][_0xd9d28c(0x356,'!jNk')],_0xfff2d5=_0x2567f8[_0xd9d28c(0x382,'!YEM')](populateUrlObject,_0x5825a5,_0x31eb7f,_0x1623d4);await _0x2567f8['QmeJB'](httpRequest,_0xd9d28c(0x386,'aaD7'),_0xfff2d5);let _0x84d795=httpResult;if(!_0x84d795)return;console['log'](_0x84d795),console[_0xd9d28c(0x2e6,'blNL')](_0xfff2d5);}catch(_0x233aca){}finally{return Promise[_0xd9d28c(0x2a4,'!jNk')](0x1);}}async[_0x4fe346(0x22b,'TKc9')](){const _0x5e739d=_0x4fe346,_0x2dbb09={'uXcjT':function(_0x1ad42d,_0x27575e){return _0x1ad42d!==_0x27575e;},'gjzqV':_0x5e739d(0x308,'#(oh'),'uqcud':_0x5e739d(0x33a,'xoKl'),'EesTB':function(_0x3a2ac6,_0x4b3a6f,_0x449486){return _0x3a2ac6(_0x4b3a6f,_0x449486);},'nhzNe':_0x5e739d(0x26c,'gv@7'),'qghiA':function(_0x4a65bb,_0x3bf167){return _0x4a65bb==_0x3bf167;},'qTGoc':'QbdNZ','kQzkn':function(_0x42129a,_0x259621){return _0x42129a==_0x259621;},'PFplO':_0x5e739d(0x296,'9q1D'),'fkEtW':function(_0x3376ea,_0x18fa59){return _0x3376ea>_0x18fa59;},'vXdRM':function(_0x3f2b4c,_0x6356cf){return _0x3f2b4c<_0x6356cf;},'MQDPw':function(_0x2136c3,_0x3c0720){return _0x2136c3+_0x3c0720;},'KMJSJ':function(_0xfa1702,_0x14e73f){return _0xfa1702===_0x14e73f;},'YsAaT':_0x5e739d(0x229,'TKc9')};try{if(_0x2dbb09['uXcjT'](_0x2dbb09['gjzqV'],_0x2dbb09[_0x5e739d(0x234,'!jNk')])){let _0x3f762a=_0x5e739d(0x249,'[%I5'),_0x41d036='',_0x499ab6=_0x5e739d(0x33e,'ubDc')+this[_0x5e739d(0x2a7,'*aE0')]['token'],_0x5e1349=populateUrlObject(_0x3f762a,_0x499ab6,_0x41d036);await _0x2dbb09['EesTB'](httpRequest,_0x2dbb09[_0x5e739d(0x258,'7fuD')],_0x5e1349);let _0x10ff96=httpResult;if(!_0x10ff96)return;_0x2dbb09['qghiA'](_0x10ff96['data'][_0x5e739d(0x2f8,'y3V!')][_0x5e739d(0x1fc,'H&@^')],!![])?_0x2dbb09['qTGoc']===_0x5e739d(0x2a8,'wP^P')?(_0x5db74b['log'](_0x5a0069+'请求失败'),_0x1787c5[_0x5e739d(0x235,'wj&i')](_0x4c765c[_0x5e739d(0x326,'(nQW')](_0xd650d))):await this[_0x5e739d(0x39a,'[ZYz')]():$[_0x5e739d(0x2ee,'C&oc')](_0x5e739d(0x388,'ubDc')+this['name']+_0x5e739d(0x2bb,'*X($'));if(_0x2dbb09['kQzkn'](_0x10ff96['data'][_0x5e739d(0x289,'H&@^')],0x0))_0x2dbb09[_0x5e739d(0x27c,'zvNR')]==='fOQEM'?await this[_0x5e739d(0x305,'zS!L')]():_0x1108aa['logAndNotify'](_0x5e739d(0x277,'@dDL')+this['name']+_0x5e739d(0x39d,'[w4l')+_0x5e00d1[_0x5e739d(0x23b,'[w4l')]);else{if(_0x2dbb09[_0x5e739d(0x373,'(nQW')](''+this[_0x5e739d(0x353,'Ka[e')],0x0))for(let _0x3be7db=0x1;_0x2dbb09[_0x5e739d(0x333,'#(oh')](_0x3be7db,_0x2dbb09[_0x5e739d(0x33d,'q8z6')](''+this['num'],0x1));_0x3be7db++){this['f']=_0x3be7db,await this['watering']();}else $[_0x5e739d(0x312,'1BuU')](_0x5e739d(0x24c,'H9%f')+this[_0x5e739d(0x2de,'6bq9')]+_0x5e739d(0x1eb,'!jNk'));}}else return _0x42dbe3['resolve'](0x1);}catch(_0x476a32){_0x2dbb09['KMJSJ'](_0x2dbb09[_0x5e739d(0x2b6,'H&@^')],_0x5e739d(0x27e,'1BuU'))?console[_0x5e739d(0x3aa,'zvNR')](_0x476a32):_0x59fdc9[_0x5e739d(0x286,'$1&o')](_0x5e739d(0x1f0,'rAVI')+this[_0x5e739d(0x287,'ubDc')]+_0x5e739d(0x2be,'P$@b'));}finally{return Promise[_0x5e739d(0x350,'^&8E')](0x1);}}async[_0x4fe346(0x321,'q8z6')](){const _0x1b79b1=_0x4fe346,_0x5250ed={'ylZmA':function(_0x376072,_0x185cf4){return _0x376072!==_0x185cf4;},'IVuLZ':'qTOMN','STGRP':function(_0x1f1c07,_0x5c3bf2,_0x22f565,_0x149a09){return _0x1f1c07(_0x5c3bf2,_0x22f565,_0x149a09);},'FeFFM':function(_0x1cf636,_0x346f92,_0x5d7859){return _0x1cf636(_0x346f92,_0x5d7859);},'TbZon':_0x1b79b1(0x34e,'P$@b')};try{if(_0x5250ed[_0x1b79b1(0x2b2,'$1&o')](_0x1b79b1(0x314,'9q1D'),_0x5250ed[_0x1b79b1(0x20b,'g2]C')])){let _0x567853=_0x1b79b1(0x20a,'(nQW'),_0x42f812='{\x22promote\x22:\x22\x22}',_0x26a75c=_0x1b79b1(0x389,'P$@b')+this[_0x1b79b1(0x32d,'r6Ut')]['token'],_0x34fdb9=_0x5250ed['STGRP'](populateUrlObject,_0x567853,_0x26a75c,_0x42f812);await _0x5250ed[_0x1b79b1(0x2cc,'y3V!')](httpRequest,_0x5250ed['TbZon'],_0x34fdb9);let _0x4d277e=httpResult;if(!_0x4d277e)return;$[_0x1b79b1(0x227,'9q1D')](_0x1b79b1(0x2e1,'#(oh')+this[_0x1b79b1(0x2d1,'$1&o')]+_0x1b79b1(0x263,'7fuD')+_0x4d277e[_0x1b79b1(0x369,'wP^P')][_0x1b79b1(0x366,'6bq9')][_0x1b79b1(0x206,'G5!z')]+_0x1b79b1(0x2f6,'H&@^')),$['logAndNotify'](_0x1b79b1(0x327,'zvNR')+this['name']+_0x1b79b1(0x2b1,'6bq9')),await $['wait'](0xbb8),await this[_0x1b79b1(0x209,'6(lm')]();}else _0x54e9db[_0x1b79b1(0x2e6,'blNL')](_0x4515e9);}catch(_0xaddc7e){}finally{return Promise['resolve'](0x1);}}async[_0x4fe346(0x377,'wP^P')](){const _0x3c68e3=_0x4fe346,_0x3e1043={'hlvTy':_0x3c68e3(0x35d,'*aE0')};try{let _0x59eea9=_0x3c68e3(0x27a,'GU8g'),_0xf00c82=_0x3c68e3(0x200,'H9%f'),_0x287422=_0x3c68e3(0x254,'AreA')+this['param']['token'],_0x5ba3b9=populateUrlObject(_0x59eea9,_0x287422,_0xf00c82);await httpRequest(_0x3e1043[_0x3c68e3(0x2ba,'zvNR')],_0x5ba3b9);let _0x4f1720=httpResult;if(!_0x4f1720)return;$['logAndNotify'](_0x3c68e3(0x22a,'P$@b')+this[_0x3c68e3(0x2de,'6bq9')]+']领取等级奖励获得'+_0x4f1720[_0x3c68e3(0x256,'gv@7')][_0x3c68e3(0x29c,'rAVI')]['rewardNum']+'水滴值'),$[_0x3c68e3(0x3a2,'y3V!')]('账号['+this['name']+_0x3c68e3(0x318,'P$@b')),await $['wait'](0xbb8),await this[_0x3c68e3(0x24f,'r6Ut')]();}catch(_0x469326){}finally{return Promise['resolve'](0x1);}}async[_0x4fe346(0x20c,'TKc9')](){const _0x176888=_0x4fe346,_0x117fcb={'EWwYD':function(_0xc54c10,_0x4d44bd,_0x4f61b4,_0x496256){return _0xc54c10(_0x4d44bd,_0x4f61b4,_0x496256);},'zhFnK':'post','AXxXu':function(_0x15e778,_0x573423){return _0x15e778(_0x573423);},'QJgUi':function(_0x2e0ed1,_0x29bc47){return _0x2e0ed1/_0x29bc47;}};try{let _0x20378d=_0x176888(0x3b0,'Rc*4'),_0x3562fa=_0x176888(0x2c0,'y3V!'),_0x3f84fd=_0x176888(0x2b5,'*X($')+this['param'][_0x176888(0x224,'[%I5')],_0x1397aa=_0x117fcb[_0x176888(0x2e5,'blNL')](populateUrlObject,_0x20378d,_0x3f84fd,_0x3562fa);await httpRequest(_0x117fcb[_0x176888(0x1ea,'g2]C')],_0x1397aa);let _0x52b4b2=httpResult;if(!_0x52b4b2)return;this['m']=_0x52b4b2[_0x176888(0x2a0,'tUo]')]['droplet'],this['n']=_0x52b4b2[_0x176888(0x39f,'y3V!')][_0x176888(0x32a,'G5!z')],this[_0x176888(0x31c,'wP^P')]=_0x117fcb[_0x176888(0x393,'GU8g')](parseInt,_0x117fcb['QJgUi'](this['m'],this['n'])),$[_0x176888(0x2cd,'6(lm')]('账号['+this['name']+_0x176888(0x24e,'i[6S')+_0x52b4b2[_0x176888(0x264,'r6Ut')][_0x176888(0x2d5,'5a&]')]+'\x20可以浇水'+this['num']+'次');}catch(_0x274cb2){}finally{return Promise['resolve'](0x1);}}async[_0x4fe346(0x345,'Ka[e')](){const _0x4ce842=_0x4fe346,_0x5695ea={'zUSpp':function(_0x2b2b8c,_0x2f641e,_0x24d32c,_0x24d68a){return _0x2b2b8c(_0x2f641e,_0x24d32c,_0x24d68a);},'cukWC':function(_0x187b43,_0x530d4c,_0x137627){return _0x187b43(_0x530d4c,_0x137627);},'ekOMz':_0x4ce842(0x344,'!jNk'),'pSpTk':function(_0x8c6693,_0x35a254){return _0x8c6693==_0x35a254;},'AImzp':function(_0x455017,_0x96016e){return _0x455017-_0x96016e;},'yUhnw':function(_0x3a0530,_0x56f57c){return _0x3a0530===_0x56f57c;},'HdgtW':'DkjOo','stVDp':_0x4ce842(0x341,'H9%f')};try{let _0x29f61f=_0x4ce842(0x31f,'i[6S'),_0x4acbab='{}',_0x629df8=_0x4ce842(0x266,'[%I5')+this['param']['token'],_0x3eb1be=_0x5695ea['zUSpp'](populateUrlObject,_0x29f61f,_0x629df8,_0x4acbab);await _0x5695ea[_0x4ce842(0x2c2,'Rc*4')](httpRequest,_0x5695ea['ekOMz'],_0x3eb1be);let _0xf1e871=httpResult;if(!_0xf1e871)return;_0x5695ea[_0x4ce842(0x2ac,'Rc*4')](_0xf1e871[_0x4ce842(0x34c,'gv@7')],0xc8)?$[_0x4ce842(0x297,'(nQW')]('账号['+this[_0x4ce842(0x2b9,'6(lm')]+']第'+this['f']+_0x4ce842(0x3ad,'*aE0')+_0xf1e871[_0x4ce842(0x256,'gv@7')]['level']+_0x4ce842(0x3a6,'GU8g')+_0x5695ea[_0x4ce842(0x2bf,'wj&i')](_0xf1e871['data'][_0x4ce842(0x211,'9q1D')],_0xf1e871[_0x4ce842(0x349,'@dDL')][_0x4ce842(0x22d,'zP0q')])):_0x5695ea[_0x4ce842(0x217,'!jNk')](_0x5695ea[_0x4ce842(0x397,'!YEM')],_0x5695ea['stVDp'])?_0x257d66[_0x4ce842(0x395,'xoKl')](_0x158f99):$['logAndNotify'](_0x4ce842(0x22a,'P$@b')+this[_0x4ce842(0x309,'P$@b')]+']'+_0xf1e871[_0x4ce842(0x392,'q8z6')]);}catch(_0x5a0943){console[_0x4ce842(0x27d,'(nQW')](_0x5a0943);}finally{return Promise[_0x4ce842(0x265,'(nQW')](0x1);}}async['list7'](){const _0x4ddb8a=_0x4fe346,_0x138f33={'hrZcj':_0x4ddb8a(0x361,'$1&o'),'qGxrv':function(_0x24b11c,_0x3f86c9,_0x67f54,_0x1eae1a){return _0x24b11c(_0x3f86c9,_0x67f54,_0x1eae1a);},'WTjkI':function(_0x5c1ab6,_0x5bcb86,_0x4c4d2d){return _0x5c1ab6(_0x5bcb86,_0x4c4d2d);},'gcXKe':_0x4ddb8a(0x268,'#(oh')};try{if(_0x138f33[_0x4ddb8a(0x37c,'[ZYz')]===_0x138f33['hrZcj']){let _0x381af8=_0x4ddb8a(0x251,'[%I5'),_0x535083='',_0x4d7070=_0x4ddb8a(0x26b,'y3V!')+this[_0x4ddb8a(0x32d,'r6Ut')][_0x4ddb8a(0x2ea,'3(o1')],_0x49067b=_0x138f33[_0x4ddb8a(0x3b3,'$1&o')](populateUrlObject,_0x381af8,_0x4d7070,_0x535083);await _0x138f33[_0x4ddb8a(0x2eb,'G5!z')](httpRequest,_0x138f33[_0x4ddb8a(0x398,'6(lm')],_0x49067b);let _0x348b2a=httpResult;if(!_0x348b2a)return;_0x348b2a[_0x4ddb8a(0x335,'2w5r')][_0x4ddb8a(0x23c,'2w5r')]==0x1?($[_0x4ddb8a(0x2c8,'[w4l')]('账号['+this[_0x4ddb8a(0x247,'wj&i')]+_0x4ddb8a(0x28a,'q8z6')+_0x348b2a[_0x4ddb8a(0x2d6,'ubDc')][_0x4ddb8a(0x2cf,'H&@^')]+_0x4ddb8a(0x2bd,'r6Ut')),await this[_0x4ddb8a(0x30c,'Rc*4')]()):$['logAndNotify'](_0x4ddb8a(0x243,'AreA')+this[_0x4ddb8a(0x3a5,'q8z6')]+_0x4ddb8a(0x35e,'wP^P'));}else _0x509b23[_0x4ddb8a(0x297,'(nQW')](_0x4ddb8a(0x399,'r6Ut')+this[_0x4ddb8a(0x325,'!jNk')]+']集水器:获得水滴值:'+_0xb3a03f[_0x4ddb8a(0x39f,'y3V!')][_0x4ddb8a(0x2d8,'i[6S')]);}catch(_0x30865f){}finally{return Promise[_0x4ddb8a(0x31d,'blNL')](0x1);}}async['sign_in'](){const _0x3d0873=_0x4fe346,_0x538c2d={'AWhLO':function(_0x56f2ce,_0x1d78d5){return _0x56f2ce!==_0x1d78d5;},'nOpcS':_0x3d0873(0x347,'q8z6'),'sXvJB':'YKNxC','GxYQk':function(_0x1e692a,_0x3aa604,_0x196b0d,_0x1221c5){return _0x1e692a(_0x3aa604,_0x196b0d,_0x1221c5);},'ElVHI':function(_0x14aa14,_0x1a01a0,_0x5903bf){return _0x14aa14(_0x1a01a0,_0x5903bf);},'BpjNu':_0x3d0873(0x252,'3(o1'),'cvoqr':_0x3d0873(0x384,'rAVI')};try{if(_0x538c2d['AWhLO'](_0x538c2d[_0x3d0873(0x2b8,'g2]C')],_0x538c2d[_0x3d0873(0x2bc,'rAVI')])){let _0x1ab91f=_0x3d0873(0x21e,'H&@^'),_0x3fe965='{}',_0x35cf5e=_0x3d0873(0x254,'AreA')+this[_0x3d0873(0x36d,'6bq9')][_0x3d0873(0x270,'C&oc')],_0x5ec1e4=_0x538c2d[_0x3d0873(0x1ed,'wj&i')](populateUrlObject,_0x1ab91f,_0x35cf5e,_0x3fe965);await _0x538c2d[_0x3d0873(0x231,'!jNk')](httpRequest,_0x538c2d[_0x3d0873(0x354,'blNL')],_0x5ec1e4);let _0x1b84b3=httpResult;if(!_0x1b84b3)return;$[_0x3d0873(0x357,'[ZYz')](_0x3d0873(0x399,'r6Ut')+this['name']+']打卡获得'+_0x1b84b3[_0x3d0873(0x2d6,'ubDc')]['Num']+_0x3d0873(0x2f6,'H&@^'));}else _0x5174e5[_0x3d0873(0x310,'AreA')]('账号['+this[_0x3d0873(0x2d1,'$1&o')]+']'+_0xb1c0eb[_0x3d0873(0x28d,'r6Ut')]);}catch(_0x1c3618){}finally{if(_0x538c2d['cvoqr']===_0x538c2d[_0x3d0873(0x28c,'ubDc')])return Promise[_0x3d0873(0x31b,'f%71')](0x1);else this[_0x3d0873(0x2ce,'zy$d')]=![],_0x3ae89c[_0x3d0873(0x334,'q8z6')]('账号['+this[_0x3d0873(0x38d,'C&oc')]+']CK格式错误');}}async['extra'](){const _0x352e87=_0x4fe346,_0x2790d9={'QNrnC':function(_0x5710b6,_0x39b4b5,_0x31c612,_0x33639e){return _0x5710b6(_0x39b4b5,_0x31c612,_0x33639e);},'AdFpc':function(_0x4a5ebd,_0x20fefc,_0x324a1f){return _0x4a5ebd(_0x20fefc,_0x324a1f);},'phQlU':'post','Ehfll':function(_0x4e9730,_0x4b9776){return _0x4e9730!==_0x4b9776;},'zkLJC':_0x352e87(0x3a0,'$1&o'),'DNqZC':_0x352e87(0x208,'wP^P')};try{let _0x88a7a1=_0x352e87(0x339,'C&oc'),_0x483b7d=_0x352e87(0x212,'gv@7')+this[_0x352e87(0x307,'9q1D')]+'}',_0xa1896e='Bearer\x20'+this[_0x352e87(0x365,'H9%f')]['token'],_0x58e951=_0x2790d9['QNrnC'](populateUrlObject,_0x88a7a1,_0xa1896e,_0x483b7d);await _0x2790d9[_0x352e87(0x25d,'zS!L')](httpRequest,_0x2790d9[_0x352e87(0x37b,'C&oc')],_0x58e951);let _0x2b9c5f=httpResult;if(!_0x2b9c5f)return;$[_0x352e87(0x293,'Ka[e')](_0x352e87(0x2d2,'9q1D')+this[_0x352e87(0x233,'zvNR')]+']任务达标奖励获得:'+_0x2b9c5f[_0x352e87(0x348,'i[6S')]['num']+'水滴值');}catch(_0x50539a){}finally{if(_0x2790d9[_0x352e87(0x394,'i[6S')](_0x2790d9[_0x352e87(0x30b,'#(oh')],_0x2790d9[_0x352e87(0x203,'*X($')]))return Promise['resolve'](0x1);else _0x1070a8['logAndNotify']('账号['+this[_0x352e87(0x337,'*aE0')]+']'+_0x2d4afb[_0x352e87(0x2f4,'f%71')]+_0x352e87(0x30a,'zP0q'));}}async[_0x4fe346(0x3b2,'9q1D')](){const _0x1beaa2=_0x4fe346,_0x682e1b={'tTzfk':function(_0x537928,_0x3b567f,_0x10e0ae,_0x23c5f4){return _0x537928(_0x3b567f,_0x10e0ae,_0x23c5f4);},'omERI':function(_0x52c886,_0x2671e7,_0x4e6dc6){return _0x52c886(_0x2671e7,_0x4e6dc6);},'QomsF':function(_0x5ef349,_0x4645ec){return _0x5ef349==_0x4645ec;},'vIpmV':function(_0x4565a5,_0x342446){return _0x4565a5!==_0x342446;},'tNONb':_0x1beaa2(0x1f3,'Rc*4')};try{let _0x4909b5=_0x1beaa2(0x2d3,'blNL'),_0x68a802=_0x1beaa2(0x28e,'zS!L')+this[_0x1beaa2(0x267,'!YEM')]+_0x1beaa2(0x250,'f%71')+this['taskld']+_0x1beaa2(0x2ed,'i[6S')+this[_0x1beaa2(0x253,'@dDL')]+'}',_0x334502=_0x1beaa2(0x3a9,'*aE0')+this[_0x1beaa2(0x25b,'ubDc')][_0x1beaa2(0x29e,'blNL')],_0x16a419=_0x682e1b[_0x1beaa2(0x255,'GU8g')](populateUrlObject,_0x4909b5,_0x334502,_0x68a802);await _0x682e1b[_0x1beaa2(0x383,'@dDL')](httpRequest,'post',_0x16a419);let _0x26d857=httpResult;if(!_0x26d857)return;_0x682e1b[_0x1beaa2(0x336,'@dDL')](_0x26d857[_0x1beaa2(0x331,'[ZYz')],0xc8)?$['logAndNotify'](_0x1beaa2(0x2ff,'y3V!')+this['name']+']获得水滴值:'+_0x26d857[_0x1beaa2(0x390,'GU8g')]['num']):$['logAndNotify'](_0x1beaa2(0x1f8,'g2]C')+this[_0x1beaa2(0x2b0,'zP0q')]+_0x1beaa2(0x214,'g2]C')+this[_0x1beaa2(0x33c,'ubDc')]+'：'+_0x26d857['msg']);}catch(_0x1e1e9f){}finally{if(_0x682e1b[_0x1beaa2(0x328,'9q1D')](_0x682e1b[_0x1beaa2(0x2d4,'G5!z')],_0x682e1b['tNONb']))_0x1913a3[_0x1beaa2(0x2d9,'i[6S')](_0x1beaa2(0x35b,'zy$d')+this[_0x1beaa2(0x324,'zy$d')]+_0x1beaa2(0x272,'zy$d'));else return Promise['resolve'](0x1);}}async['receive1'](){const _0x2a1181=_0x4fe346,_0x78ab3e={'qLxxk':function(_0x1a3a87,_0x148217,_0x18f73,_0x2ccbee){return _0x1a3a87(_0x148217,_0x18f73,_0x2ccbee);},'SqMGH':function(_0x5de4ee,_0x34b734,_0x23a691){return _0x5de4ee(_0x34b734,_0x23a691);},'LJhDu':_0x2a1181(0x2f9,'H&@^')};try{let _0x4605f7=_0x2a1181(0x21b,'C&oc'),_0xb06e64='{}',_0x4f96aa=_0x2a1181(0x364,'^&8E')+this['param']['token'],_0x33b1db=_0x78ab3e[_0x2a1181(0x2dd,'rAVI')](populateUrlObject,_0x4605f7,_0x4f96aa,_0xb06e64);await _0x78ab3e[_0x2a1181(0x20e,'H&@^')](httpRequest,_0x78ab3e[_0x2a1181(0x29d,'wP^P')],_0x33b1db);let _0x57e3bc=httpResult;if(!_0x57e3bc)return;_0x57e3bc[_0x2a1181(0x2d0,'5a&]')]==0xc8?$[_0x2a1181(0x293,'Ka[e')]('账号['+this[_0x2a1181(0x2cb,'1BuU')]+_0x2a1181(0x22f,'[w4l')+_0x57e3bc[_0x2a1181(0x2ae,'C&oc')]['totalDroplet']):$[_0x2a1181(0x334,'q8z6')](_0x2a1181(0x399,'r6Ut')+this[_0x2a1181(0x36f,'C&oc')]+_0x2a1181(0x21c,'zvNR')+_0x57e3bc[_0x2a1181(0x221,'xoKl')]);}catch(_0x4ba267){}finally{return Promise['resolve'](0x1);}}async[_0x4fe346(0x205,'7fuD')](){const _0x53e10d=_0x4fe346,_0x5a89d5={'gwIst':_0x53e10d(0x34f,'G5!z'),'kTYpG':function(_0x4573d1,_0x3b037a,_0x1faf9a,_0x7044d5){return _0x4573d1(_0x3b037a,_0x1faf9a,_0x7044d5);},'ATwBL':function(_0x4a6445,_0x4c149f){return _0x4a6445==_0x4c149f;}};try{if('udcZi'!==_0x5a89d5[_0x53e10d(0x3ac,'^&8E')])_0x56732a['logAndNotify'](_0x53e10d(0x35c,'[w4l')+this['name']+_0x53e10d(0x282,'wP^P')+_0xafca49['data'][_0x53e10d(0x283,'6(lm')]);else{let _0x496eac='https://app.dewu.com/hacking-tree/v1/droplet/get_generate_droplet',_0x4546c9='{}',_0x2fbb7e=_0x53e10d(0x2b7,'zS!L')+this[_0x53e10d(0x32b,'P$@b')]['token'],_0x12a84f=_0x5a89d5[_0x53e10d(0x371,'9q1D')](populateUrlObject,_0x496eac,_0x2fbb7e,_0x4546c9);await httpRequest('post',_0x12a84f);let _0x51d03c=httpResult;if(!_0x51d03c)return;_0x5a89d5[_0x53e10d(0x2f0,'3(o1')](_0x51d03c[_0x53e10d(0x376,'AreA')],0xc8)?$[_0x53e10d(0x286,'$1&o')](_0x53e10d(0x329,'wj&i')+this['name']+']集水器:获得水滴值:'+_0x51d03c[_0x53e10d(0x264,'r6Ut')][_0x53e10d(0x320,'^&8E')]):$[_0x53e10d(0x330,'zvNR')](_0x53e10d(0x370,'Rc*4')+this[_0x53e10d(0x2d1,'$1&o')]+_0x53e10d(0x237,'6(lm')+_0x51d03c['msg']);}}catch(_0x5a53bd){}finally{return Promise[_0x53e10d(0x379,'[w4l')](0x1);}}}!(async()=>{const _0x4c4d4c=_0x4fe346,_0x46cb37={'FgoIc':function(_0x566b5d,_0x6af962){return _0x566b5d!==_0x6af962;},'FGRwt':_0x4c4d4c(0x220,'f%71'),'iwLjf':function(_0x137bf8,_0xeead92){return _0x137bf8!==_0xeead92;},'IAyqi':_0x4c4d4c(0x338,'6(lm'),'gTwDp':function(_0x3123d8){return _0x3123d8();},'fQhGI':function(_0x2a2232,_0xf75d16){return _0x2a2232===_0xf75d16;},'clNXQ':'decFH','nWsRv':_0x4c4d4c(0x311,'f%71'),'yqCzS':_0x4c4d4c(0x222,'2w5r'),'xHRxP':function(_0xb6344f,_0xef0cc8){return _0xb6344f>_0xef0cc8;},'wKpFF':function(_0x2d9e52,_0xa1692e){return _0x2d9e52===_0xa1692e;},'sQZMx':_0x4c4d4c(0x238,'G5!z'),'fljnq':_0x4c4d4c(0x363,'Rc*4'),'fCbEo':'\x0a--------------\x20每日任务\x20--------------','PJITe':function(_0x245985,_0xec35d5){return _0x245985!==_0xec35d5;},'QCGDq':_0x4c4d4c(0x32e,'3(o1'),'LQEdX':_0x4c4d4c(0x2a9,'rAVI')};if(_0x46cb37[_0x4c4d4c(0x275,'*X($')](typeof $request,_0x46cb37[_0x4c4d4c(0x1f1,'H&@^')])){}else{if(_0x46cb37[_0x4c4d4c(0x319,'*aE0')](_0x4c4d4c(0x27b,'i[6S'),_0x46cb37[_0x4c4d4c(0x39b,'6(lm')])){if(_0x360e50)_0x1c8fa2[_0x4c4d4c(0x340,'q8z6')](new _0x614e98(_0x42f637));}else{if(!await _0x46cb37[_0x4c4d4c(0x26a,'rAVI')](checkEnv))return;await _0x46cb37[_0x4c4d4c(0x202,'AreA')](sc);let _0x9449f6=[],_0x373d36=userList[_0x4c4d4c(0x207,'1BuU')](_0x37090b=>_0x37090b['ckValid']);if(_0x373d36[_0x4c4d4c(0x29f,'2w5r')]>0x0){if(_0x46cb37[_0x4c4d4c(0x25e,'C&oc')](_0x46cb37['clNXQ'],_0x46cb37['nWsRv']))return _0x694949['resolve'](0x1);else{$['logAndNotify'](_0x46cb37[_0x4c4d4c(0x2c6,'y3V!')]),_0x9449f6=[];for(let _0x541549 of _0x373d36){_0x9449f6[_0x4c4d4c(0x248,'C&oc')](_0x541549['my']());}await Promise['all'](_0x9449f6),_0x373d36=_0x373d36['filter'](_0x326bcd=>_0x326bcd[_0x4c4d4c(0x280,'zvNR')]);if(_0x46cb37[_0x4c4d4c(0x2d7,'!YEM')](_0x373d36['length'],0x0)){if(_0x46cb37[_0x4c4d4c(0x36b,'xoKl')](_0x46cb37[_0x4c4d4c(0x32c,'[ZYz')],_0x46cb37['fljnq']))return _0xf41a92['resolve'](0x1);else{$[_0x4c4d4c(0x210,'H9%f')](_0x46cb37[_0x4c4d4c(0x3b1,'i[6S')]),_0x9449f6=[];for(let _0x2c5258 of _0x373d36['filter'](_0x383b3f=>_0x383b3f[_0x4c4d4c(0x1fa,'!jNk')])){_0x46cb37[_0x4c4d4c(0x232,'xoKl')](_0x46cb37[_0x4c4d4c(0x20d,'[ZYz')],_0x46cb37[_0x4c4d4c(0x2fb,'[%I5')])?_0x4c4c23[_0x4c4d4c(0x2ca,'xoKl')](_0x593681['my']()):_0x9449f6['push'](_0x2c5258['list']());}await Promise[_0x4c4d4c(0x274,'[ZYz')](_0x9449f6),$['logAndNotify']('\x0a--------------\x20彩蛋任务\x20--------------'),_0x9449f6=[];for(let _0x3c97fe of _0x373d36['filter'](_0x4280c8=>_0x4280c8[_0x4c4d4c(0x2af,'6bq9')])){_0x46cb37['LQEdX']!==_0x4c4d4c(0x2a1,'4%W1')?_0x5ee0cb['logAndNotify'](_0x4c4d4c(0x315,'*aE0')+this[_0x4c4d4c(0x246,'blNL')]+']等级奖励已领取'):(_0x9449f6[_0x4c4d4c(0x340,'q8z6')](_0x3c97fe[_0x4c4d4c(0x269,'6(lm')]()),await $[_0x4c4d4c(0x38b,'blNL')](0xbb8),_0x9449f6['push'](_0x3c97fe[_0x4c4d4c(0x24b,'[%I5')]()),await $[_0x4c4d4c(0x38f,'y3V!')](0xbb8),_0x9449f6['push'](_0x3c97fe[_0x4c4d4c(0x306,'f%71')]()),await $[_0x4c4d4c(0x2c9,'aaD7')](0xbb8),_0x9449f6['push'](_0x3c97fe[_0x4c4d4c(0x288,'^&8E')]()),await $[_0x4c4d4c(0x367,'zS!L')](0xbb8),_0x9449f6[_0x4c4d4c(0x2da,'#(oh')](_0x3c97fe['get_tree_info']()));}await Promise[_0x4c4d4c(0x360,'zy$d')](_0x9449f6);}}}}await $[_0x4c4d4c(0x34b,'zP0q')]();}}})()[_0x4fe346(0x355,'r6Ut')](_0x366938=>console['log'](_0x366938))[_0x4fe346(0x290,'rAVI')](()=>$['done']());async function sc(){const _0x21fab1=_0x4fe346,_0xbeb5f6={'MZyRL':function(_0x1ad5c6,_0xdef378,_0x33b2ce){return _0x1ad5c6(_0xdef378,_0x33b2ce);},'ODbpO':function(_0x448ea4,_0x5501eb,_0x33b2ac){return _0x448ea4(_0x5501eb,_0x33b2ac);},'FnPhL':'get'};try{let _0x36c8b3=_0x21fab1(0x21f,'$1&o'),_0x41db6e='',_0x5c2322=_0xbeb5f6[_0x21fab1(0x2f7,'zS!L')](populateUrlObject,_0x36c8b3,_0x41db6e);await _0xbeb5f6['ODbpO'](httpRequest,_0xbeb5f6[_0x21fab1(0x317,'H&@^')],_0x5c2322);let _0x120cd3=httpResult;if(!_0x120cd3)return;$[_0x21fab1(0x2ee,'C&oc')]('\x0a'+_0x120cd3[_0x21fab1(0x35f,'^&8E')]+_0x21fab1(0x244,'q8z6')+_0x120cd3[_0x21fab1(0x271,'H&@^')]+'》'+_0x120cd3[_0x21fab1(0x37e,'H9%f')]);var _0x524618=_0x120cd3[_0x21fab1(0x1f6,'xoKl')];}catch(_0x2321e5){}finally{return Promise['resolve'](0x1);}}async function checkEnv(){const _0x4dbb8b=_0x4fe346,_0x112c7e={'ENcPm':function(_0x25c5d1,_0x4271bc){return _0x25c5d1>_0x4271bc;}};if(userCookie){let _0x3f8166=envSplitor[0x0];for(let _0x59e5d2 of envSplitor){if(_0x112c7e[_0x4dbb8b(0x284,'i[6S')](userCookie['indexOf'](_0x59e5d2),-0x1)){_0x3f8166=_0x59e5d2;break;}}for(let _0x2102c2 of userCookie[_0x4dbb8b(0x38c,'q8z6')](_0x3f8166)){if(_0x2102c2)userList[_0x4dbb8b(0x38e,'g2]C')](new UserInfo(_0x2102c2));}userCount=userList['length'];}else{console['log'](_0x4dbb8b(0x298,'6bq9'));return;}return console['log']('共找到'+userCount+_0x4dbb8b(0x3ae,'y3V!')),!![];}function populateUrlObject(_0x2f6e84,_0x2ad490,_0xf2bd0a=''){const _0x211da6=_0x4fe346,_0xdb3bb0={'rjNUC':'application/json;charset=UTF-8','HRRsh':_0x211da6(0x387,'Rc*4')};let _0x31ebeb=_0x2f6e84[_0x211da6(0x276,'H&@^')]('//','/')[_0x211da6(0x1ef,'2w5r')]('/')[0x1],_0x196eca={'url':_0x2f6e84,'headers':{'Host':_0x31ebeb,'x-auth-token':_0x2ad490,'deviceTrait':deviceTrait,'deviceId':deviceId,'uuid':deviceId,'appVersion':appVersion,'User-Agent':defaultUA},'timeout':0x1388};return _0xf2bd0a&&(_0x196eca[_0x211da6(0x2a6,'(nQW')]=_0xf2bd0a,_0x196eca[_0x211da6(0x385,'C&oc')][_0x211da6(0x201,'xoKl')]=_0xdb3bb0[_0x211da6(0x2fc,'f%71')],_0x196eca['headers'][_0xdb3bb0['HRRsh']]=_0x196eca[_0x211da6(0x2c5,'2w5r')]?_0x196eca[_0x211da6(0x22c,'6bq9')][_0x211da6(0x2c4,'TKc9')]:0x0),_0x196eca;}async function httpRequest(_0x360e2f,_0x2eaa02){const _0xabaa70=_0x4fe346,_0x66e57e={'WplFh':_0xabaa70(0x302,'gv@7'),'JGLNt':'content-type','ooBMO':'application/json;charset=UTF-8','NKzjH':function(_0x56e052,_0x30eb20){return _0x56e052===_0x30eb20;},'uESBd':'rExnf','UnYIz':function(_0x5099fb,_0xd78fd8){return _0x5099fb==_0xd78fd8;},'GJHuN':_0xabaa70(0x3a8,'5a&]'),'AbzJf':'WVLsC','BsmkA':function(_0x366b7a,_0x4b8cdd){return _0x366b7a===_0x4b8cdd;},'vFRhG':_0xabaa70(0x30e,'H&@^')};return httpResult=null,httpReq=null,httpResp=null,new Promise(_0x1fe3a5=>{const _0x56adc2=_0xabaa70,_0x3a5637={'KVfSj':_0x66e57e[_0x56adc2(0x273,'zvNR')],'wzjog':_0x66e57e[_0x56adc2(0x294,'i[6S')],'fYOLe':_0x66e57e[_0x56adc2(0x36e,'(nQW')],'WVXPt':_0x56adc2(0x387,'Rc*4'),'QkWDS':function(_0x203842,_0x3720d4){return _0x203842!==_0x3720d4;},'pwJEM':'bvvrF','swTzZ':function(_0x5728d2,_0xde1230){const _0x1a1523=_0x56adc2;return _0x66e57e[_0x1a1523(0x2b4,'rAVI')](_0x5728d2,_0xde1230);},'tBzZE':_0x66e57e['uESBd'],'siWvb':function(_0x449d8b,_0x1f0006){const _0x19b411=_0x56adc2;return _0x66e57e[_0x19b411(0x1f5,'[ZYz')](_0x449d8b,_0x1f0006);},'FYEsU':_0x66e57e[_0x56adc2(0x3a7,'6bq9')],'xjxdL':'UmhPL','XaIeZ':_0x66e57e['AbzJf'],'VfdeK':function(_0x3bb446){return _0x3bb446();}};_0x66e57e[_0x56adc2(0x3a3,'1BuU')](_0x56adc2(0x29a,'[ZYz'),_0x66e57e[_0x56adc2(0x2fa,'i[6S')])?_0x57af81['log'](_0x2a267b):$[_0x56adc2(0x381,'9q1D')](_0x360e2f,_0x2eaa02,async(_0x477a9,_0x38b90e,_0x4d2697)=>{const _0x5d2416=_0x56adc2,_0x1f2268={'DCAlo':_0x3a5637[_0x5d2416(0x2e4,'7fuD')],'gKisX':_0x3a5637['fYOLe'],'vnBRc':_0x3a5637['WVXPt']};try{if(_0x3a5637['QkWDS'](_0x3a5637[_0x5d2416(0x2fd,'wP^P')],_0x5d2416(0x291,'C&oc'))){httpReq=_0x38b90e,httpResp=_0x4d2697;if(_0x477a9)_0x3a5637['swTzZ']('rExnf',_0x3a5637[_0x5d2416(0x260,'i[6S')])?(console[_0x5d2416(0x374,'C&oc')](_0x360e2f+'请求失败'),console[_0x5d2416(0x262,'^&8E')](JSON[_0x5d2416(0x1f2,'7fuD')](_0x477a9))):_0x8a1119[_0x5d2416(0x223,'[%I5')]('账号['+this['name']+']查询账户失败，变量失效或检查变量格式');else{if(_0x4d2697['body']){if(_0x3a5637['siWvb'](typeof _0x4d2697['body'],_0x3a5637[_0x5d2416(0x25f,'9q1D')])){if(_0x3a5637[_0x5d2416(0x38a,'tUo]')](_0x3a5637['xjxdL'],_0x3a5637[_0x5d2416(0x28b,'wP^P')]))httpResult=_0x4d2697[_0x5d2416(0x1ec,'*aE0')];else{let _0x229c4b=_0x94bca5[_0x5d2416(0x23e,'9q1D')]('//','/')['split']('/')[0x1],_0x41edff={'url':_0x36d364,'headers':{'Host':_0x229c4b,'x-auth-token':_0x20b7b3,'deviceTrait':_0x1ccdbc,'deviceId':_0x1349b1,'uuid':_0x111ff8,'appVersion':_0x19e708,'User-Agent':_0x427835},'timeout':0x1388};return _0x48829a&&(_0x41edff['body']=_0x42af52,_0x41edff[_0x5d2416(0x351,'4%W1')][_0x1f2268[_0x5d2416(0x2e0,'*X($')]]=_0x1f2268['gKisX'],_0x41edff[_0x5d2416(0x261,'q8z6')][_0x1f2268[_0x5d2416(0x259,'#(oh')]]=_0x41edff[_0x5d2416(0x391,'!YEM')]?_0x41edff[_0x5d2416(0x35a,'r6Ut')][_0x5d2416(0x300,'C&oc')]:0x0),_0x41edff;}}else try{httpResult=JSON[_0x5d2416(0x228,'q8z6')](_0x4d2697[_0x5d2416(0x295,'H&@^')]);}catch(_0x5ad2d4){httpResult=_0x4d2697[_0x5d2416(0x2c1,'$1&o')];}}}}else{_0x2bc329[_0x5d2416(0x278,'g2]C')](_0x3a5637[_0x5d2416(0x22e,'H9%f')]);return;}}catch(_0x55d84d){if(_0x3a5637[_0x5d2416(0x30f,'Rc*4')](_0x5d2416(0x37f,'y3V!'),_0x3a5637[_0x5d2416(0x1f9,'$1&o')]))console[_0x5d2416(0x39c,'G5!z')](_0x55d84d);else return _0x2a10e5[_0x5d2416(0x25a,'1BuU')](0x1);}finally{_0x3a5637[_0x5d2416(0x3a4,'zvNR')](_0x1fe3a5);}});});}var version_ = 'jsjiami.com.v7';
////////////////////////////////////////////////////////////////////
function Env(name,env) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
    return new class {
        constructor(name,env) {
            this.name = name
            this.notifyStr = ''
            this.startTime = (new Date).getTime()
            Object.assign(this,env)
            console.log(`${this.name} 开始运行：`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const[, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const[, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                o = this.getval(i),
                h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                    s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                    s = this.setval(JSON.stringify(o), i)
                }
            }
            else {
                s = this.setval(t, e);
            }
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        send(m, t, e = (() => {})) {
            if(m != 'get' && m != 'post' && m != 'put' && m != 'delete') {
                console.log(`无效的http方法：${m}`);
                return;
            }
            if(m == 'get' && t.headers) {
                delete t.headers["content-type"];
                delete t.headers["Content-Length"];
            } else if(t.body && t.headers) {
                if(!t.headers["content-type"]) t.headers["content-type"] = "application/json";
            }
            if(this.isSurge() || this.isLoon()) {
                if(this.isSurge() && this.isNeedRewrite) {
                    t.headers = t.headers || {};
                    Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1});
                }
                let conf = {
                    method: m,
                    url: t.url,
                    headers: t.headers,
                    timeout: t.timeout,
                    data: t.body
                };
                if(m == 'get') delete conf.data
                $axios(conf).then(t => {
                    const {
                        status: i,
                        request: q,
                        headers: r,
                        data: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    });
                }).catch(err => console.log(err))
            } else if (this.isQuanX()) {
                t.method = m.toUpperCase(), this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })),
                $task.fetch(t).then(t => {
                    const {
                        statusCode: i,
                        request: q,
                        headers: r,
                        body: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    })
                }, t => e(t))
            } else if (this.isNode()) {
                this.got = this.got ? this.got : require("got");
                const {
                    url: s,
                    ...i
                } = t;
                this.instance = this.got.extend({
                    followRedirect: false
                });
                this.instance[m](s, i).then(t => {
                    const {
                        statusCode: i,
                        request: q,
                        headers: r,
                        body: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    })
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "h+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        async showmsg() {
            if(!this.notifyStr) return;
            let notifyBody = this.name + " 运行通知\n\n" + this.notifyStr
            if($.isNode()){
                var notify = require('./sendNotify');
                console.log('\n============== 推送 ==============')
                await notify.sendNotify(this.name, notifyBody);
            } else {
                this.msg(notifyBody);
            }
        }
        logAndNotify(str) {
            console.log(str)
            this.notifyStr += str
            this.notifyStr += '\n'
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                 : this.isSurge() ? {
                    url: t
                }
                 : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                        s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                        s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "============== 系统通知 =============="];
            h.push(e),
            s && h.push(s),
            i && h.push(i),
            console.log(h.join("\n"))
        }
        getMin(a,b){
            return ((a<b) ? a : b)
        }
        getMax(a,b){
            return ((a<b) ? b : a)
        }
        padStr(num,length,padding='0') {
            let numStr = String(num)
            let numPad = (length>numStr.length) ? (length-numStr.length) : 0
            let retStr = ''
            for(let i=0; i<numPad; i++) {
                retStr += padding
            }
            retStr += numStr
            return retStr;
        }
        json2str(obj,c,encodeUrl=false) {
            let ret = []
            for(let keys of Object.keys(obj).sort()) {
                let v = obj[keys]
                if(v && encodeUrl) v = encodeURIComponent(v)
                ret.push(keys+'='+v)
            }
            return ret.join(c);
        }
        str2json(str,decodeUrl=false) {
            let ret = {}
            for(let item of str.split('&')) {
                if(!item) continue;
                let idx = item.indexOf('=')
                if(idx == -1) continue;
                let k = item.substr(0,idx)
                let v = item.substr(idx+1)
                if(decodeUrl) v = decodeURIComponent(v)
                ret[k] = v
            }
            return ret;
        }
        randomString(len,charset='abcdef0123456789') {
            let str = '';
            for (let i = 0; i < len; i++) {
                str += charset.charAt(Math.floor(Math.random()*charset.length));
            }
            return str;
        }
        randomList(a) {
            let idx = Math.floor(Math.random()*a.length)
            return a[idx]
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
            s = (e - this.startTime) / 1e3;
            console.log(`\n${this.name} 运行结束，共运行了 ${s} 秒！`)
            if(this.isSurge() || this.isQuanX() || this.isLoon()) $done(t)
        }
    }(name,env)
}