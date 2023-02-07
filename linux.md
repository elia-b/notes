---
title: Linux
---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Reformat a Bootable USB-stick back to normal](#reformat-a-bootable-usb-stick-back-to-normal)

## Reformat a Bootable USB-stick back to normal

Use `Disks` app to monitor file system partitions.

- Find out name of location in form `/dev/sd*`, where `*` is a letter fro a to z,
either on `Disks` or with the following command:

```bash
sudo fdisk -l
```

- Unmount and stop processes (needed only if mounted):

```bash
sudo umount /dev/sd*
```

- Wipe all partitions (be very carefull):

```bash
sudo wipefs -all /dev/sd*
```

- Create new partition:

```bash
sudo cfdisk /dev/sd*
```

- Select `dos`, then give it `default size`, then `write`, type `yes` and exit.

- Install exfatprogs
(if you do have it already and if you want to use `exFAT`):

```bash
sudo apt install exfatprogs
```

Format partition (use `mkfs.exfat` only if you want to use `exFAT`):

```bash
sudo sudo mkfs.exfat -n '<USB-stick-name>' /dev/sd*
```
