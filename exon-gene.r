options(java.parameters = "-Xmx7000m")

library(dplyr)
library(GenomicRanges)
library(rtracklayer)

#### READING GTF
#df <- read.table('extra-ref/exon-anno', header=T)
df <- rtracklayer::import('canFam3.refGene.gtf')
df <- subset(df, type=='exon')
df <- data.frame(df)
df <- df[!grepl(df$seqnames, pattern='chrUn'),]
df <- df[,c(1,2,3,5,7,12,13)]
colnames(df)[c(1,6)] <- c('chr','gene')
i=1
results=data.frame()
for (gene in unique(df$gene)) {
	wdf <- df[df$gene==gene,]
	results[i,'chr'] <- unique(wdf$chr)[1]
	results[i,'start'] <- min(wdf$start)
	results[i,'end'] <- max(wdf$end)
	results[i,'gene'] <- gene
	results[i,'strand'] <- unique(wdf$strand)[1]
	i=i+1
}

results$type <- 'intron'
results$exon_number <- 'NA'

write.table(file='extra-ref/gene-anno', rbind(df,results), row.names=F, sep='\t', quote=F)
