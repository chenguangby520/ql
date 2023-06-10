import json
import os
import re
import sys
import time

import jsonpath


def GetTime(choose):
    if choose == 1:
        return int(round(time.time()))
    elif choose == 2:
        return time.strftime("%Y-%m-%d", time.localtime())
    elif choose == 3:
        return int(round(time.time() * 1000))


from functools import partial

import requests

print = partial(print, flush=True)


def GetCookies():
    CookieKWWs = []
    if os.environ.get("KWW_COOKIE"):
        print("已获取并使用Env环境 Cookie")
        if '@' in os.environ["KWW_COOKIE"]:
            CookieKWWs = os.environ["KWW_COOKIE"].split('@')
        elif '\n' in os.environ["KWW_COOKIE"]:
            CookieKWWs = os.environ["KWW_COOKIE"].split('\n')
        else:
            CookieKWWs = [os.environ["KWW_COOKIE"]]
    else:
        print("未获取到正确✅格式的口味王账号Cookie")
        return

    print(f"====================共{len(CookieKWWs)}个口味王账号Cookie====================\n")
    print(
        f"=========脚本执行- 北京时间(UTC+8)：{time.strftime('%Y/%m/%d %H:%M:%S', time.localtime())}=========\n")
    return CookieKWWs


try:
    GetCk = GetCookies()
except:
    print("未添加COOKIE变量")
    sys.exit(3)


def Account(memberId):
    headers = {
        'Host': 'member.kwwblcj.com',
        'Connection': 'keep-alive',
        'charset': 'utf-8',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 11; M2102J2SC Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/3171 MMWEBSDK/20220303 Mobile Safari/537.36 MMWEBID/9891 MicroMessenger/8.0.21.2103(0x28001541) Process/appbrand2 WeChat/arm64 Weixin GPVersion/1 NetType/4G Language/zh_CN ABI/arm64 MiniProgramEnv/android',
        'content-type': 'application/json',
        'Referer': 'https://servicewechat.com/wxfb0905b0787971ad/33/page-frame.html',
    }

    params = {
        'userKeys': 'v1.0',
        'pageName': 'select-member-score',
        'formName': 'searchForm',
        'memberId': f'{memberId}',
    }

    response = requests.get('https://member.kwwblcj.com/member/api/info/', params=params, headers=headers)
    if response.status_code == 200:
        msg = re.findall(r'"result":(.*?),', response.text)
        print("现有:" + msg[0] + "积分")
    else:
        print("boom")


def SignIn(memberId):
    headers = {
        'Host': 'member.kwwblcj.com',
        'Connection': 'keep-alive',
        'charset': 'utf-8',
        'Accept-Encoding': 'gzip,compress,br,deflate',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 11; M2102J2SC Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/3171 MMWEBSDK/20220303 Mobile Safari/537.36 MMWEBID/9891 MicroMessenger/8.0.21.2103(0x28001541) Process/appbrand0 WeChat/arm64 Weixin GPVersion/1 NetType/4G Language/zh_CN ABI/arm64 MiniProgramEnv/android',
        'content-type': 'application/json',
        'Referer': 'https://servicewechat.com/wxfb0905b0787971ad/33/page-frame.html',
    }

    params = (
        ('userKeys', 'v1.0'),
    )

    data = f'{{"pageName":"AddSignSvmInfo","formName":"addForm","orderNo":"1","paramNo":"10","cateId":"7105988877817529856","memberId":"{memberId}","memberName":"哈哈哈"}}'

    response = requests.post('https://member.kwwblcj.com/member/api/submit/', headers=headers, params=params,
                             data=data.encode("utf-8"), timeout=10)

    if response.status_code == 200:
        msg = re.findall(r'"msg":"(.*?)"', response.text)
        print(msg[0])
    else:
        print("boom")


def QingGuo(memberId):
    headers = {
        'Host': 'member.kwwblcj.com',
        'Connection': 'keep-alive',
        'charset': 'utf-8',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 11; M2102J2SC Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/3171 MMWEBSDK/20220303 Mobile Safari/537.36 MMWEBID/9891 MicroMessenger/8.0.21.2103(0x28001541) Process/appbrand0 WeChat/arm64 Weixin GPVersion/1 NetType/4G Language/zh_CN ABI/arm64 MiniProgramEnv/android',
        'content-type': 'application/json',
        'Referer': 'https://servicewechat.com/wxfb0905b0787971ad/33/page-frame.html',
    }

    params = {
        'userKeys': 'v1.0',
        'pageName': 'activeTaskFlag',
        'formName': 'editForm',
        'memberId': f'{memberId}',
        'userCname': '哈哈哈',
    }

    response = requests.get('https://member.kwwblcj.com/member/api/list/', params=params, headers=headers)
    if response.status_code == 200:
        print("点击青果成功")
    else:
        print(response.text)


def Read(memberId):
    headers = {
        'Host': 'member.kwwblcj.com',
        'Connection': 'keep-alive',
        'charset': 'utf-8',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 11; M2102J2SC Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/3171 MMWEBSDK/20220303 Mobile Safari/537.36 MMWEBID/2487 MicroMessenger/8.0.21.2103(0x28001541) Process/appbrand1 WeChat/arm64 Weixin GPVersion/1 NetType/4G Language/zh_CN ABI/arm64 MiniProgramEnv/android',
        'content-type': 'application/json',
        'Referer': 'https://servicewechat.com/wxfb0905b0787971ad/33/page-frame.html',
    }

    params = {
        'userKeys': 'v1.0',
        'pageName': 'setNewsReadTaskFlag',
        'formName': 'addForm',
        'memberId': f'{memberId}',
        'userCname': '哈哈哈',
        'articleTitle': '口味王“我要上大学”公益助学行动再度起航！助力600名学子筑梦大学',
    }

    response = requests.get('https://member.kwwblcj.com/member/api/list/', params=params, headers=headers)
    if response.status_code == 200:
        print("点击阅读成功")
    else:
        print(response.text)


def LoginLink(memberId):
    headers = {
        'Host': 'member.kwwblcj.com',
        'Connection': 'keep-alive',
        'charset': 'utf-8',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 11; M2102J2SC Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/3171 MMWEBSDK/20220303 Mobile Safari/537.36 MMWEBID/2487 MicroMessenger/8.0.21.2103(0x28001541) Process/appbrand2 WeChat/arm64 Weixin GPVersion/1 NetType/4G Language/zh_CN ABI/arm64 MiniProgramEnv/android',
        'content-type': 'application/json',
        'Referer': 'https://servicewechat.com/wxfb0905b0787971ad/33/page-frame.html',
    }

    params = {
        'userKeys': 'v1.0',
        'pageName': 'loginFreePlugin',
        'formName': 'searchForm',
        'uid': f'{memberId}',
        'levelCode': 'K1',
        'redirect': 'https://89420.activity-20.m.duiba.com.cn/projectx/p129446ea/index.html?appID=89420',
    }

    response = requests.get('https://member.kwwblcj.com/member/api/info/', params=params, headers=headers)
    if response.status_code == 200:
        result = re.findall(r'"result":"(.*?)",', response.text)

        return result[0]
    else:
        print(response.text)


def GetkwwCk(memberId):
    session = requests.Session()
    headers = {
        'Host': '89420.activity-20.m.duiba.com.cn',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 11; M2102J2SC Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/3171 MMWEBSDK/20220303 Mobile Safari/537.36 MMWEBID/2487 MicroMessenger/8.0.21.2103(0x28001541) Process/appbrand2 WeChat/arm64 Weixin GPVersion/1 NetType/4G Language/zh_CN ABI/arm64 miniProgram/wxfb0905b0787971ad',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/wxpic,image/tpg,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'X-Requested-With': 'com.tencent.mm',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-User': '?1',
        'Sec-Fetch-Dest': 'document',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',

    }
    url = LoginLink(memberId)
    res = session.get(url, headers=headers)
    if res.status_code == 200:
        print("获取CK成功")
        Cookie = dict(session.cookies)
        return Cookie
    else:
        print(res.text)


def Starttask(cookies):
    headers = {
        'Host': '89420.activity-20.m.duiba.com.cn',
        'Connection': 'keep-alive',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 11; M2102J2SC Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/3171 MMWEBSDK/20220303 Mobile Safari/537.36 MMWEBID/9891 MicroMessenger/8.0.21.2103(0x28001541) Process/appbrand2 WeChat/arm64 Weixin GPVersion/1 NetType/4G Language/zh_CN ABI/arm64 miniProgram/wxfb0905b0787971ad',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': '*/*',
        'X-Requested-With': 'com.tencent.mm',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://89420.activity-20.m.duiba.com.cn/projectx/p129446ea/index.html?appID=89420&from=login&spm=89420.1.1.1',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    }

    params = {
        'user_type': '0',
        'is_from_share': '1',
        '_t': f'{GetTime(3)}',
    }

    res = requests.get('https://89420.activity-20.m.duiba.com.cn/projectx/p129446ea/answer/answerPage.do',
                       params=params, cookies=cookies, headers=headers)
    if res.status_code == 200:
        print("答题开始")
    else:
        print(res.text)


def TaskId(cookies):
    headers = {
        'Host': '89420.activity-20.m.duiba.com.cn',
        'Connection': 'keep-alive',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 11; M2102J2SC Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/3171 MMWEBSDK/20220303 Mobile Safari/537.36 MMWEBID/9891 MicroMessenger/8.0.21.2103(0x28001541) Process/appbrand2 WeChat/arm64 Weixin GPVersion/1 NetType/4G Language/zh_CN ABI/arm64 miniProgram/wxfb0905b0787971ad',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': '*/*',
        'X-Requested-With': 'com.tencent.mm',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://89420.activity-20.m.duiba.com.cn/projectx/p129446ea/index.html?appID=89420&from=login&spm=89420.1.1.1',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    }

    params = {
        'user_type': '0',
        'is_from_share': '1',
        '_t': f'{GetTime(3)}',
    }

    response = requests.get('https://89420.activity-20.m.duiba.com.cn/projectx/p129446ea/answer/start.do',
                            params=params, cookies=cookies, headers=headers)

    if response.status_code == 200:
        res = response.json()
        if res['data'] == None:
            print("傻鸟已经答题过了")
            return 0;
        else:
            return res['data']
    else:
        print("出错了")


def GetAnswer(cookies, startId):
    headers = {
        'Host': '89420.activity-20.m.duiba.com.cn',
        'Connection': 'keep-alive',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 11; M2102J2SC Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/3171 MMWEBSDK/20220303 Mobile Safari/537.36 MMWEBID/9891 MicroMessenger/8.0.21.2103(0x28001541) Process/appbrand2 WeChat/arm64 Weixin GPVersion/1 NetType/4G Language/zh_CN ABI/arm64 miniProgram/wxfb0905b0787971ad',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': '*/*',
        'X-Requested-With': 'com.tencent.mm',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://89420.activity-20.m.duiba.com.cn/projectx/p129446ea/index.html?appID=89420&from=login&spm=89420.1.1.1',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    }

    params = {
        'startId': f'{startId}',
        'user_type': '0',
        'is_from_share': '1',
        '_t': f'{GetTime(3)}',
    }

    response = requests.get('https://89420.activity-20.m.duiba.com.cn/projectx/p129446ea/answer/getQuestion.do',
                            params=params, cookies=cookies, headers=headers)
    print(response.text)
    res = json.loads(response.text)
    answerList = jsonpath.jsonpath(res, '$..answerList')
    print(answerList)
    if len(answerList[0]) == 2:
        for i in range(0, len(answerList[0])):
            answer = re.search(r'正确|槟榔', answerList[0][i])
            if answer != None:
                return i + 1
        else:
            print("匹配不到答案,提交选项A为答案\n复制日记给19462800适配")
            return 1
    elif res['data']['content'] == "“和成天下”品牌采用海南原果的比例是多少？":
        year = []
        for i in range(0, len(answerList[0])):
            year.append(int(re.findall(r'[0-9]+', answerList[0][i])[0]))
        maxyear = max(year)
        for i in range(0, len(answerList[0])):
            if year[i] == maxyear:
                return i + 1
        else:
            print("匹配不到答案,提交选项A为答案\n复制日记给19462800适配")
            return 1
    elif res['data']['content'] == "槟榔果一般在什么时间采摘？":
        for i in range(0, len(answerList[0])):
            answer = re.search(r'8~10月', answerList[0][i])
            if answer != None:
                return i + 1
        else:
            print("匹配不到答案,提交选项A为答案\n复制日记给19462800适配")
            return 1
    elif res['data']['content'] == "槟榔起源于哪里？":
        for i in range(0, len(answerList[0])):
            answer = re.search(r'马来西亚', answerList[0][i])
            if answer != None:
                return i + 1
        else:
            print("匹配不到答案,提交选项A为答案\n复制日记给19462800适配")
            return 1
    elif res['data']['content'] == "“异味谁栽向海滨，亭亭直干乱枝分。”这句诗描写的是哪种植物？":
        for i in range(0, len(answerList[0])):
            answer = re.search(r'槟榔树', answerList[0][i])
            if answer != None:
                return i + 1
        else:
            print("匹配不到答案,提交选项A为答案\n复制日记给19462800适配")
            return 1
    elif res['data']['content'] == "“可疗饥怀香自吐，能消瘴疠暖如熏。”这句诗描写的是哪种植物？":
        for i in range(0, len(answerList[0])):
            answer = re.search(r'槟榔树', answerList[0][i])
            if answer != None:
                return i + 1
        else:
            print("匹配不到答案,提交选项A为答案\n复制日记给19462800适配")
            return 1
    elif res['data']['content'] == "邓丽君的歌曲：“高高的树上结_____，谁先爬上谁先尝”":
        for i in range(0, len(answerList[0])):
            answer = re.search(r'槟榔', answerList[0][i])
            if answer != None:
                return i + 1
        else:
            print("匹配不到答案,提交选项A为答案\n复制日记给19462800适配")
            return 1
    elif res['data']['content'] == "西汉汉武帝曾制定_____作为皇室贡品进献":
        for i in range(0, len(answerList[0])):
            answer = re.search(r'槟榔', answerList[0][i])
            if answer != None:
                return i + 1
    elif res['data']['content'] == "中国“四大南药”之首是什么？":
        for i in range(0, len(answerList[0])):
            answer = re.search(r'槟榔', answerList[0][i])
            if answer != None:
                return i + 1
        else:
            print("匹配不到答案,提交选项A为答案\n复制日记给19462800适配")
            return 1
    elif res['data']['tag'] == "历史文学":
        year = []
        for i in range(0, len(answerList[0])):
            year.append(int(re.findall(r'[0-9]+', answerList[0][i])[0]))
        maxyear = max(year)
        for i in range(0, len(answerList[0])):
            if year[i] == maxyear:
                return i + 1
        else:
            print("匹配不到答案,提交选项A为答案\n复制日记给19462800适配")
            return 1
    elif res['data']['type'] == "C1":
        for i in range(0, len(answerList[0])):
            answer = re.search(r'槟榔', answerList[0][i])
            if answer != None:
                return i + 1
        else:
            print("匹配不到答案,提交选项A为答案\n复制日记给19462800适配")
            return 1
    elif res['data']['type'] == "C2":
        for i in range(0, len(answerList[0])):
            answer = re.search(r'槟榔', answerList[0][i])
            if answer != None:
                return i + 1
        else:
            print("匹配不到答案,提交选项A为答案\n复制日记给19462800适配")
            return 1
    elif res['data']['type'] == "B":
        for i in range(0, len(answerList[0])):
            answer = re.search(r'以上[全|都]是|全国高端销量领先|嫩青果', answerList[0][i])
            if answer != None:
                return i + 1
    else:
        print("匹配不到答案,提交选项A为答案\n复制日记给19462800适配")
        return 1


def TaskAnswer(cookies, startId):
    answer = GetAnswer(cookies, startId)
    headers = {
        'Host': '89420.activity-20.m.duiba.com.cn',
        'Connection': 'keep-alive',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 11; M2102J2SC Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/3171 MMWEBSDK/20220303 Mobile Safari/537.36 MMWEBID/9891 MicroMessenger/8.0.21.2103(0x28001541) Process/appbrand2 WeChat/arm64 Weixin GPVersion/1 NetType/4G Language/zh_CN ABI/arm64 miniProgram/wxfb0905b0787971ad',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': '*/*',
        'X-Requested-With': 'com.tencent.mm',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://89420.activity-20.m.duiba.com.cn/projectx/p129446ea/index.html?appID=89420&from=login&spm=89420.1.1.1',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    }

    params = {
        'answer': f'{answer}',
        'startId': f'{startId}',
        'user_type': '0',
        'is_from_share': '1',
        '_t': f'{GetTime(3)}',
    }

    response = requests.get('https://89420.activity-20.m.duiba.com.cn/projectx/p129446ea/answer/submit.do',
                            params=params, cookies=cookies, headers=headers)

    if response.status_code == 200:
        res = response.json()
        print(response.text)
        try:
            if res['data']['correct'] == True:
                print("答案正确")
            else:
                print("正确答案为" + res['data']['correctAnswer'] + "选项")
                print("出错了")
        except:
            print("将日记复制给19462800")


def endTask(cookies, startId):
    headers = {
        'Host': '89420.activity-20.m.duiba.com.cn',
        'Connection': 'keep-alive',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 11; M2102J2SC Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/3171 MMWEBSDK/20220303 Mobile Safari/537.36 MMWEBID/9891 MicroMessenger/8.0.21.2103(0x28001541) Process/appbrand2 WeChat/arm64 Weixin GPVersion/1 NetType/4G Language/zh_CN ABI/arm64 miniProgram/wxfb0905b0787971ad',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': '*/*',
        'X-Requested-With': 'com.tencent.mm',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://89420.activity-20.m.duiba.com.cn/projectx/p129446ea/index.html?appID=89420&from=login&spm=89420.1.1.1',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    }

    params = {
        'startId': f'{startId}',
        'user_type': '0',
        'is_from_share': '1',
        '_t': f'{GetTime(3)}',
    }

    response = requests.get('https://89420.activity-20.m.duiba.com.cn/projectx/p129446ea/answer/complete.do',
                            params=params, cookies=cookies, headers=headers)
    print("任务结束")
    print(response.text)


if __name__ == '__main__':
    try:
        cks = GetCk
        if not cks:
            sys.exit()
    except:
        print("未获取到有效cateId or memberId or memberName,退出程序！")
        sys.exit()
    num = 0
    for cookie in cks[:]:
        num += 1
        memberId = cookie
        print(f'\n******开始【口味王账号{num}】 *********\n')
        #print("⏰等待5s,休息一下")
        #time.sleep(5)
        #Account(memberId)
        #SignIn(memberId)
        #print("⏰等待1s,休息一下")
        #time.sleep(1)
        #QingGuo(memberId)
        #print("⏰等待1s,休息一下")
        #time.sleep(1)
        #Read(memberId)
        #print("⏰等待1s,休息一下")
        #time.sleep(1)
        cookies = GetkwwCk(memberId)
        Starttask(cookies)
        startId = TaskId(cookies)
        if startId == 0:
            Account(memberId)
            continue
        else:
            for i in range(5):
                TaskAnswer(cookies, startId)
                print("⏰等待2s,休息一下")
                time.sleep(2)
                endTask(cookies, startId)
        Account(memberId)
